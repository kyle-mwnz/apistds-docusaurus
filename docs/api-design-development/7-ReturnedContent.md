<!-- order:7 -->
## Returned Content

The returned content is the body of the message that the API returns in
response to a request. This usually relates to the resource that was
requested.

### Resource Scope

The amount of data to return about a resource depends on several
factors:

-   Business context - does all the resource information being returned
    have relevance to the business process or activity consumers will
    use it for?

-   Payload size and network efficiency - how much information does the
    resource contain, and is it so bulky it could impact network
    performance?

-   Usefulness - is the information in the returned content always
    useful to the consumer, or is it something they may need once but
    never again?

Analysis of the full resource data against these factors should help
determine how much resource data is returned in the response.

### Formats

REST responses should be of a format which is both human and machine
readable. Even if your initial consumer is via B2B, the API should be
designed, where possible, for all potential consumers. REST APIs should,
by default, return content in JSON format. But it is good practice to
support multiple message formats (e.g. XML, Multi-part MIME) and allow
consuming applications to request the format they wish to consume (in
line with the \"Design for the Consumer\" principle in Part A, section
4).

The response format required from a GET request must be indicated by the
consumer in their request using the Accept header. For example:

> #GET a resource and specify the response type
>
> https://api.example.govt.nz/crown-property/0219c539-5885-4ab6-a55b-b0de7537c426
>
> Accept: application/xml
>
> #Response
>
> \<?xml version=\"1.0\" encoding=\"UTF-8\" ?\>
>
> \<CrownProperyResponseBody
> xmlns=\"https://api.example.com/CrownProperyResponse\"\>
>
> \<id\>0219c539-5885-4ab6-a55b-b0de7537c426\</id\>
>
> \<category\>commercial\</category\>
>
> \<location\>
>
> \<streetName\>Northbound Boulevard\</streetName\>
>
> \<town\>Wellington\</town\>
>
> \<postalCode\>6011\</postalCode\>
>
> \<countryCode\>NZ\</countryCode\>
>
> \</location\>
>
> \<pricing\>
>
> \<rentFrequency\>annual\</rentFrequency\>
>
> \<currencyCode\>NZD\</currencyCode\>
>
> \<pricePerUnitArea\>
>
> \<price\>1000\</price\>
>
> \<units\>squareMetre\</units\>
>
> \</pricePerUnitArea\>
>
> \<transactionType\>rent\</transactionType\>
>
> \</pricing\>
>
> \<property_type\>office\</property_type\>
>
> \<areas\>
>
> \<internal\>
>
> \<minimum\>
>
> \<value\>183\</value\>
>
> \<units\>squareMetre\</units\>
>
> \</minimum\>
>
> \<maximum\>
>
> \<value\>188\</value\>
>
> \<units\>squareMetre\</units\>
>
> \</maximum\>
>
> \</internal\>
>
> \</areas\>
>
> \<detailedDescription\>
>
> \<text\>Free text describing the property in some way.\</text\>
>
> \</detailedDescription\>
>
> \<tenancy\>
>
> \<life_cycle_status\>tennanted\</life_cycle_status\>
>
> \<nextReviewDate\>2016-06-01\</nextReviewDate\>
>
> \</tenancy\>
>
> \</CrownProperyResponseBody\>

The request format for a request containing a request body (POST, PUT,
PATCH) must be supplied in the Content-Type request header. For example:

> #PUT (update) a resource
>
> https://api.example.govt.nz/crown-property
>
> Content-Type: application/json
>
> Accept: application/json
>
> #Request BODY
>
> {
>
> \"id\": \"0219c539-5885-4ab6-a55b-b0de7537c426\",
>
> \"category\": \"commercial\",
>
> \"location\": {
>
> \"streetName\": \"Northbound Boulevard\",
>
> \"town\": \"Wellington\",
>
> \"postalCode\": \"6011\",
>
> \"countryCode\": \"NZ\"
>
> },
>
> \"pricing\": {
>
> \"rentFrequency\": \"annual\",
>
> \"currencyCode\": \"NZD\",
>
> \"pricePerUnitArea\": {
>
> \"price\": 1000,
>
> \"units\": \"squareMetre\"
>
> },
>
> \"transactionType\": \"rent\"
>
> },
>
> \"property_type\": \"office\",
>
> \"areas\": {
>
> \"internal\": {
>
> \"minimum\": {
>
> \"value\": 183,
>
> \"units\": \"squareMetre\"
>
> },
>
> \"maximum\": {
>
> \"value\": 188,
>
> \"units\": \"squareMetre\"
>
> }
>
> }
>
> },
>
> \"detailedDescription\": \[
>
> {
>
> \"text\": \"Free text describing the property in some way.\"
>
> }
>
> \],
>
> \"tenancy\": {
>
> \"life_cycle_status\": \"vacant\",
>
> \"nextReviewDate\": \"2016-07-01\"
>
> }
>
> }

For a good example of this in action, see the tabbed format options for
presenting patient information on the FHIR[^2] site.

Where JSON format is used in responses, it must conform to the JSON
Standard
([[RFC7159]{.underline}](https://tools.ietf.org/html/rfc7159)[^3]). In
line with this standard, textual content should be UTF-8 encoded by
default, and any deviations from this must be limited.

It is inadvisable to use APIs for returning binary data such as images
in the response content; hyperlinks to images are the preferred returned
response. But where images *are* returned, ensure that the image
encoding is MIME, HTTP Multipart.

HTML is allowed, but is less flexible for consumer usage (e.g. how can
it be consumed by a native mobile app?), ties content to presentation
and loses its benefits when building a single page application. It also
reduces the ability to filter the content in transit for consumers who
have fine grained control on what they can access. However, it may be
necessary for some forms of API e.g. APIs with geospatial content.

Avoid using bespoke formats in returned content.

**[Recommended]{.smallcaps}**

Returned content format should be JSON by default.

**[Required]{.smallcaps}**

Requests for a specific return format must be defined in the Accept
header.

### Layout

Responses should be a JSON object (not an array) by default. Using an
array to return results limits the ability to include metadata about
results and limits the API\'s ability to add additional top-level
properties in the future. Don\'t use unpredictable properties. Parsing a
JSON response where properties are unpredictable (e.g. derived from
data) is difficult, and adds friction for clients.

**Example of good layout**

> {
>
> \"response_metadata\": {
>
> \"item1\": \"value1\",
>
> \"item2\": \"value2\"
>
> },
>
> \"responseArray\": \[
>
> {
>
> \"name\": \"entity1\",
>
> \"type\": \"good\"
>
> },
>
> {
>
> \"name\": \"entity2\",
>
> \"type\": \"good\"
>
> }
>
> \]
>
> }

**Example of bad layout**

> \[
>
> {
>
> \"name\": \"entity1\",
>
> \"type\": \"bad\"
>
> },
>
> {
>
> \"name\": \"entity2\",
>
> \"type\": \"bad\"
>
> }
>
> \]

### JSON Property Names

Within content, property names should conform to the following
guidelines:

-   Property names should be meaningful names with defined semantics

-   Property names must be camel-case ASCII strings

-   The first character must be a letter or underscore (\_)

-   Subsequent characters can be a letter, a digit, or underscore

-   Reserved JavaScript keywords should be avoided

### Consistency

Preserve backwards compatibility with existing consumers of the API by
returning expected fields and employing sensible default values for
missing fields. Keep consistency of terminology throughout, so that the
consumer is not misled. Avoid modifying the semantics of content to new
meanings, e.g. don't change a \'title\' field from meaning the title of
the page, to meaning the prefix for a name to the person's job title.

### Singletons vs. Collections

Some API GET calls will return a single resource item (e.g. GET
https://api.example.govt.nz/passengers/12345) whereas some calls will
return a collection of resource items (e.g. GET
https://api.example.govt.nz/passengers), and the handling and error
treatment can be different.

A single item will generally consist of all the pertinent fundamental
details about the resource, and the GET will return these fundamental
details.

**Example**

> #GET a single passenger resource by ID
>
> GET <https://api.example.govt.nz/passengers/12345>
>
> Accept: application/json,version=1.\*
>
> {
>
> "id": 12345,
>
> "names": {
>
> "firstName": "John",
>
> "middleName": "Howard",
>
> "lastName": "Doe",
>
> "preferredName": "Howie",
>
> "title": "Mr"
>
> },
>
> "addresses": \[
>
> {
>
> "type": "home",
>
> "address1": "1 Some Street",
>
> "address2": "Some Suburb",
>
> "address3": "Some City",
>
> "address4": null,
>
> "country": "New Zealand",
>
> "postcode": 1111
>
> },
>
> {
>
> "type": "business",
>
> "address1": "2 Work Street",
>
> "address2": "Work Suburb",
>
> "address3": "Work City",
>
> "address4": null,
>
> "country": "New Zealand",
>
> "postcode": 2222
>
> }
>
> \]
>
> }

If passenger 12345 did not exist, the HTTP return code would be 404.

If a requested sub resource did not exist e.g. addresses for passenger
54321: GET https://api.example.govt.nz/passengers/54321/addresses an
HTTP 404 response would not be valid. The correct response would contain
an empty array:

> #GET a single passenger address resource by ID
>
> GET https://api.example.govt.nz/passengers/54321/addresses
>
> Accept: application/json,version=1.\*
>
> {
>
> "id": 54321,
>
> "addresses": \[
>
> {
>
> "type": null,
>
> "address1": null,
>
> "address2": null,
>
> "address3": null,
>
> "address4": null,
>
> "country": null,
>
> "postcode": null
>
> }
>
> \]
>
> }

A collection will take the form of an array of the given resources,
including any related metadata. The collection returned should be the
complete set, leaving it to the consumer to reduce the quantity of
information returned by sending filters in the resource request (see
[[section 2.5.6, Query Arguments]{.underline}](#query-arguments)). The
only reason the collection should be filtered by the API provider is
based on the security context; the API consumer should only gain access
to what that consumer is allowed to see. It is advisable to aim for
consistent naming of collection resource fields, as this enables
application developers to create generic handling of the data from
across various resource collections offered by the API. Collection
resources should not contain binary attachments or other content that
will lead to large response payloads.

Note that the example below is contrived and it would be rare to expose
a resource collection as large as passengers.

**Example**

> #GET a collection of passenger resources
>
> GET <https://api.example.govt.nz/passengers>
>
> Accept: application/json,version=1.\*
>
> {
>
> "passengers": \[
>
> {
>
> "id": 12345,
>
> "names": {
>
> "firstName": "John",
>
> "middleName": "Howard",
>
> "lastName": "Doe",
>
> "salutation": "Mr John Doe",
>
> "title": "Mr"
>
> }
>
> },
>
> {
>
> "id": 98765,
>
> "names": {
>
> "firstName": "Mary",
>
> "middleName": "Pauline",
>
> "lastName": "Smith",
>
> "salutation": "Ms Mary Smith",
>
> "title": "Ms"
>
> }
>
> },
>
> {
>
> ".....lots more passengers here.....": "..."
>
> }
>
> \],
>
> "\_links": \[
>
> {
>
> "rel": "12345",
>
> "href": "https://api.example.govt.nz/passengers/12345"
>
> },
>
> {
>
> "rel": "98765",
>
> "href": "https://api.example.govt.nz/passengers/98765"
>
> },
>
> {
>
> ".....lots more links here.....": "..."
>
> }
>
> \]
>
> }

If there were no results from a query against a filter, e.g. passengers
booked on a specific flight
(GET https://api.example.govt.nz/passengers/flights/1234), the return
value would be a 200 response code, because the query is not invalid and
there may be such data in the future.

### HATEOAS

HATEOAS, or Hypermedia as the Engine of Application State, is the
principle of not just returning a response to a request, but also
returning links to other useful capabilities. So, if a POST has just
been used to create an item, the response could return links to options
to update the item, delete the item and view other items of the same
type. This makes it possible for UIs which utilise an API to be
automatically generated (in terms of hyperlinks) and adaptable to change
(response content links).

If a web page effectively captures a single state in time, then
hyperlinks are transitions to other states. The HATEOAS principle
suggests that REST should return not only response content (current
state) but also links to transitions to other states. This could result
in thinner clients and fatter APIs, and means UIs need to be built to
adapt to potential new transitions, but makes it possible to update all
UIs no matter what platform they sit on (mobile app, web application
etc.).

For example, consider the following representation of a person and
sequence of requests:

This example assumes that an address is a unique resource in its own
right and that people are associated with addresses. (This may not
always be a practical application and the example is used just to
illustrate the hypermedia concept.)

**1. User submits a request for a person record:**

\# Request person details:

> GET
> https://api.example.govt.nz/people/c70d37cf-3314-4a24-a2c3-0fca7ec0943f
>
> Host: www.example.com
>
> Accept: application/json;q=1.0

\# Response with person details:

> HTTP/1.1 200 OK
>
> Content-Location:
> https://api.example.govt.nz/people/c70d37cf-3314-4a24-a2c3-0fca7ec0943f
>
> Content-Type: application/json;charset=UTF-8
>
> Cache-control: max-age=3600,must-revalidate
>
> {
>
> \"personId\": \"d9e1a2f6-6bc9-46af-9dbb-50de7f6eacd5\",
>
> \"name\": \"Joe Bloggs\",
>
> \"email\": \"joe.bloggs@example.com\",
>
> \"addresses\": \[
>
> {
>
> \"id\": \"5046b8f2-e8aa-4ec9-a597-34d01af0fd32\",
>
> \"streetNumber\": \"12\",
>
> \"streetName\": \"Somewhere Street\",
>
> \"City\": \"Springfield\",
>
> \"type\": \"home\"
>
> },
>
> {
>
> \"id\": \"18a1a85c-3b1e-41b9-909c-668f2a803b69\",
>
> \"streetNumber\": \"1\",
>
> \"streetName\": \"Some Other Street\",
>
> \"City\": \"Springfield\",
>
> \"type\": \"business\"
>
> }
>
> \],
>
> \"\_links\": \[
>
> {
>
> \"rel\": \"self\",
>
> \"href\":
> \"https://api.example.govt.nz/people/d9e1a2f6-6bc9-46af-9dbb-50de7f6eacd5\"
>
> },
>
> {
>
> \"rel\": \"address1\",
>
> \"href\":
> \"https://api.example.govt.nz/addresses/046b8f2-e8aa-4ec9-a597-34d01af0fd32\"
>
> },
>
> {
>
> \"rel\": \"address2\",
>
> \"href\":
> \"https://api.example.govt.nz/addresses/18a1a85c-3b1e-41b9-909c-668f2a803b69\"
>
> }
>
> \]
>
> }

Assume an intermediate proxy were to cache that response as directed by
the cache control header.

**2. The user then updates the address details changing the street
number:**

\# Request to update the address details:

> PUT
> https://api.example.govt.nz/addresses/d9e1a2f6-6bc9-46af-9dbb-50de7f6eacd5
> HTTP/1.1
>
> Host: api.example.govt.nz
>
> Content-Type: application/json
>
> {
>
> \"streetNumber\": \"12a\",
>
> \"streetName\": \"Somewhere Street\",
>
> \"City\": \"Springfield\"
>
> }

\# Response that the update was successful:

> HTTP/1.1 204 No Content
>
> Location:
> https://api.example.govt.nz/addresses/046b8f2-e8aa-4ec9-a597-34d01af0fd32

If the user were now to re-fetch the person details again as per step 1,
the representation would contain a stale version of the address (street
number 12 instead of 12a) because the address representation had been
cached. This caching could occur anywhere along the network path
(including public internet) between the server and client.

Using hypermedia links for related resources improves the visibility of
the API and avoids these types of problems. Consider the revised person
representation below:

> {
>
> \"personId\": \"d9e1a2f6-6bc9-46af-9dbb-50de7f6eacd5\",
>
> \"name\": \"JoeBloggs\",
>
> \"email\": \"joe.bloggs@example.com\",
>
> \"addresses\": \[
>
> {
>
> \"rel\": \"self\",
>
> \"href\":
> \"https://api.example.govt.nz/addresses/5046b8f2-e8aa-4ec9-a597-34d01af0fd32\"
>
> },
>
> {
>
> \"rel\": \"self\",
>
> \"href\":
> \"https://api.example.govt.nz/addresses/18a1a85c-3b1e-41b9-909c-668f2a803b69\"
>
> }
>
> \],
>
> \"\_links\": \[
>
> {
>
> \"rel\": \"self\",
>
> \"href\":
> \"https://api.example.govt.nz/people/d9e1a2f6-6bc9-46af-9dbb-50de7f6eacd5\"
>
> }
>
> \]
>
> }

Using this approach, the embedded object is replaced with a link to the
"real" object. Although this approach requires a larger number of
network requests, it avoids the stale data problems and reduces payload
size, which is an important consideration for APIs being used by mobile
devices or over high latency networks.
