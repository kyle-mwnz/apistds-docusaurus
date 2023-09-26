<!-- order:9 -->
## Batch Handling & Transactions

APIs are not designed for large payloads i.e. batch handling for
retrieving or uploading batches of data. APIs are geared towards
stateless, usually synchronous, web-like requests for individual
discrete data transactions. However, batch handling can be achieved
through bundling multiple calls to the same API. This helps achieve
atomicity of transactions and aids recoverability in event of
errors.[^4]

When handling transactions, it is important to consider the
troubleshooting and recovery aspects of error handling. This includes
visibility of transaction progress and the ability to perform root cause
analysis. To achieve this, it is advisable that logging is performed on
all transactions coming through an API, with accurate timestamping, so
that monitoring tools can visualise transaction progress. It also
requires transaction identifiers (See [[section 2.6.1,]{.underline}
[Request Headers]{.underline}](#request-headers)) to be built into
transactional API calls to ensure the transaction is traceable
end-to-end.

In some cases, it may be deemed appropriate to provide an asynchronous
batch type capability using an API. This would usually be implemented in
a scenario where legacy system impact is a concern. An example of this
could be a bulk creation of person records in a database based on a
batch event in a consuming legacy application. In such a scenario it
would be preferable for the consuming application to treat each person
as a unique event and to POST to a person API for each new unique
resource. Whilst this may seem like an unnecessary overhead, by
individualising the transactions each success or error scenario can be
handled in its own right, and the consumer can be informed of their
transaction status. If this is not possible, due to some system
restriction, it is possible to asynchronously POST multiple person
details to an API. This type of interaction should not be attempted
synchronously as large batches will tie up HTTP threads and in some
cases require client/server timeout control.

**Example Request**

The following is an example of a singleton create person request:

> {
>
> \"names\": {
>
> \"firstName\": \"John\",
>
> \"middleName\": \"Howard\",
>
> \"lastName\": \"Doe\",
>
> \"salutation\": \"Mr John Doe\",
>
> \"title\": \"Mr\"
>
> }
>
> }

This is an example of a bulk person create API call:

> #POST a collection of person resources
>
> POST https://api.example.govt.nz/people
>
> Accept: application/json,version=1.\*
>
> {
>
> \"people\": \[
>
> {
>
> \"names\": {
>
> \"firstName\": \"John\",
>
> \"middleName\": \"Howard\",
>
> \"lastName\": \"Doe\",
>
> \"salutation\": \"Mr John Doe\",
>
> \"title\": \"Mr\"
>
> }
>
> },
>
> {
>
> \"names\": {
>
> \"firstName\": \"Mary\",
>
> \"middleName\": \"Pauline\",
>
> \"lastName\": \"Smith\",
>
> \"salutation\": \"Ms Mary Smith\",
>
> \"title\": \"Ms\"
>
> }
>
> },
>
> {
>
> \"\.....lots more people here\.....\": \"\...\"
>
> }
>
> \]
>
> }

**Example Response**

Note that the API is unable to respond with headers such as Location as
this request should be treated as asynchronous.

> 200 OK
