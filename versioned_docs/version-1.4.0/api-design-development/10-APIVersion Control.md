<!-- order:10 -->
## API Version Control

### API Version Control Methods

There are two main API versioning methodologies commonly used. There are
positives and negatives to both approaches and a large amount of debate
over which is the most "RESTful". Rather than stipulate a methodology to
use in this standard, below is a description of each methodology in
order of preference. Both, however, are acceptable. What is more
important is that APIs are versioned and that there is an understanding
of when and why to version an API.

#### Accept Header Versioning

This is usually considered the most RESTful way to version APIs because
the resource path remains "pure" and it is possible to provide more
version flexibility for clients. It is, however, technically more
difficult to implement, and in many cases commercial API
management/gateway products do not support or work well with this
approach.

Header based versioning should be performed using the Accept header
where a consuming application requests an API version as defined in an
Accept header. Wildcards (\*) are used by the consuming application to
indicate acceptance of the latest major or minor version of an API.

**Example**

> #Get details for provider id 123435 -- latest minor version of the API
>
> GET https://api.example.govt.nz/providers/12345
>
> Accept: application/json, version=1.\*
>
> Host: api.example.govt.nz
>
> #Get details for provider id 123435 --version 1.1 of the API
>
> GET https://api.example.govt.nz/providers/12345
>
> Accept: application/json, version=1.1
>
> Host: api.example.govt.nz
>
> #Get details for provider id 123435 -- latest version of the API
>
> GET https://api.example.govt.nz/providers/12345
>
> Accept: application/json, version=\*
>
> Host: api.example.govt.nz

The response should include the version of the API that responded to the
client request in the **Content-Type** header.

**Example**

> Content-Type: application/json,version=1.2

#### URI (Path) Versioning

URL-based versioning is a viable alternative, as the version number in
the URL should only change when major revisions have been made and the
interface has changed substantially without backwards compatibility. For
URL-based versioning the URI should include /vN with the major version
(N) and v as a prefix. Agencies should not include minor version numbers
when using version numbers in the API paths.

This is probably the easiest method to implement, but a number of REST
purists feel that it compromises the URI and does not offer enough
flexibility to consumers. If there is a requirement to support a large
number of historical versions of APIs it can mean that there is
complexity introduced with the number of URIs to maintain.

**Example**

> #Query version of version 1 of the search API
>
> GET
> [[https://api.example.govt.nz/customers/v1/search?first-name=John&last-name=Smith&page-size=10]{.underline}](https://api.example.govt.nz/customers/v1/search?first-name=John&last-name=Smith&page-size=10)
>
> #Query version 2 of the search API
>
> GET
> https://api.example.govt.nz/customers/v2/search?first-name=John&last-name=Smith&page-size=10

The response should still indicate the version of the API that was
called. This can be done as above, using the **Content-Type** header or
in the **Location** header, as the version in the path indicates the API
that was called.

### When to Version

Simply put, an API should be versioned when a change is considered
breaking. One of the benefits of an API is that, if it is well designed,
there should be fewer breaking changes. In government however, there are
likely to be situations where legislative changes enforce a new version
of an API and deprecation of all previous versions.

#### Breaking Changes

A change is a breaking change if any consuming application requires
changes to work with the new version. i.e. the new version will not
successfully process messages provided by existing consumers. A breaking
change should be considered as a major version change e.g. 1.3 to 2.0.

Examples of breaking changes include:

-   The removal of any property from the response representation

-   The change of datatype for an existing property, or a change from
    optional to required

-   The removal of any resource, or HTTP Verb support

-   A change to the way errors are handled

-   Any change to existing resource URIs

#### Non-Breaking Changes

A change is non-breaking if any message that would have been processed
by the previous version will be successfully processed by the new
version (i.e. backwards compatible). This will enable an existing
consumer of the previous version to work with the new version without
requiring modification. A non-breaking change should be considered as a
minor version change e.g. 1.1 to 1.2.

Such changes include:

-   The addition of new properties to the JSON representation

-   The addition of new resources

-   The addition of support for new HTTP Verbs (new operations) on
    existing resources

-   Support for new custom headers, e.g. for request tracing

### Software Configuration Management

It is important to remember that version control is more than just
versioning the resource. An API will inherently have associated code and
artefacts. Consider what comprises an API and include these as a logical
artefact stored and managed in a software configuration management (SCM)
system. It is a good idea to try and capture all components in a format
that can be controlled by SCM. A good example of this is UML diagrams;
these cannot be version controlled unless captured in a text like
format. See
[[http://www.planttext.com/planttext]{.underline}](http://www.planttext.com/planttext)
or
[[https://www.websequencediagrams.com]{.underline}](https://www.websequencediagrams.com)
for examples of textual UML modelling.

An API artefact should, where possible, comprise the following:

-   Any API code

-   API specification (OpenAPI)

-   Unit test scripts such as
    [[JUnit]{.underline}](http://junit.org/junit5/) or
    [[Mocha]{.underline}](https://mochajs.org/).

-   Continuous integration support files such as grunt.js or Ant
    scripts.
