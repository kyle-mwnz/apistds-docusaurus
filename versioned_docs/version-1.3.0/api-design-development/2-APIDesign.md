<!-- order:2 -->
## API Design

Application developers will invest heavily in using your API. They will
invest in learning the design and behaviour of your API, in developing
and testing around your API and may even invest in developing an entire
business model on your API.

Good API designs will attract more developers. Conversely, bad API
designs will drive away developers and drive up costs -- support costs,
maintenance costs and operating costs.

### When is an API appropriate?

In the past, the default reaction to a requirement for capability has
been to develop a web application. This is now gravitating towards APIs
as the default. So, when is it better to build an API than a web
application? Below are some situations where an API may be more
appropriate:

-   When commercial organisations or NGOs are screen scraping data from
    the agency's website

-   When the agency holds a single authoritative source of the truth

-   Where there is a need for (near real time) information exchange with
    a partner agency

-   When parts of a business process are (or may be) outsourced

-   When the agency's service can be included as part of a larger
    business process

-   When an agency needs internal systems to interact with cloud-based
    COTS solutions (SaaS)

-   Where businesses require easy access to (public) information

-   Where commercial organisations want to build capability into their
    own applications which will benefit the public (mobile/web apps)

-   When an agency expects other parties to act as agents or
    intermediaries for their services

-   When an agency expects to support service delivery across multiple
    channels

### Types of API

There are several different types of API and the type you choose may
depend on the technical use cases that you apply to both consumption and
provision of your API.

+------------+---------------------------------+----------------------+
| API Type   | Description                     | Usage                |
+============+=================================+======================+
| REST       | Representational State Transfer | Creating distributed |
|            | (REST) is the most common and   | system where a set   |
|            | well understood API type. REST  | of API resources are |
|            | should be considered an         | well defined. If     |
|            | architectural style for         | medium latency       |
|            | developing distributed          | resource creation or |
|            | hypermedia systems. There is a  | modification (POST,  |
|            | wealth of information and       | PUT, DELETE) is      |
|            | tooling to support the          | required then        |
|            | definition and creation of REST | typically a REST API |
|            | APIs. Typically, a REST API     | is a better fit.     |
|            | will have a well-defined and    | Typically used for   |
|            | strongly typed schema           | synchronous          |
|            | definition (OpenAPI) where      | interactions.        |
|            | strict compliance can be        |                      |
|            | achieved.                       |                      |
+------------+---------------------------------+----------------------+
| GraphQL    | GraphQL is an open source query | An API that has a    |
|            | and manipulation language       | widely distributed   |
|            | developed by Facebook primarily | client set with a    |
|            | designed to empower API         | variety of data      |
|            | consumers to consume only the   | requirements.        |
|            | data that they require. A       | Particularly well    |
|            | common criticism of REST is     | suited to high read  |
|            | that only the entire resource   | (GET) clients        |
|            | is available for consumption,   |                      |
|            | sometimes referred to as "over  |                      |
|            | fetching", however with GraphQL |                      |
|            | the client decides the data     |                      |
|            | that it requires. GraphQL also  |                      |
|            | has a strongly typed schema     |                      |
|            | (GraphQL Schema Definition      |                      |
|            | Language -- SDL).               |                      |
+------------+---------------------------------+----------------------+
| As         | AsyncAPI is an open source      | Creating distributed |
| ynchronous | initiative to create an         | systems where a set  |
| APIs       | event-driven and asynchronous   | of API resources are |
|            | API standardization and         | well defined.        |
|            | development tooling.            | Typically used for   |
|            | The AsyncAPI specification,     | asynchronous         |
|            | inspired by the OpenAPI         | interactions and     |
|            | specification, describes and    | event driven         |
|            | documents event-driven APIs in  | architectures. Also, |
|            | a machine-readable format.      | useful when          |
|            |                                 | developing APIs that |
|            |                                 | front workflows or   |
|            |                                 | long running         |
|            |                                 | orchestrations.      |
+------------+---------------------------------+----------------------+
| gRPC       | gRPC is a modern open source    | Creating distributed |
|            | high performance Remote         | systems that require |
|            | Procedure Call (RPC) framework  | highly performant    |
|            | that can run in any             | and scalable API\'s. |
|            | environment.                    | gRPC makes use of    |
|            |                                 | binary data rather   |
|            | In gRPC, a client application   | than just text which |
|            | can directly call a method on a | makes the            |
|            | server application on a         | communication more   |
|            | different machine as if it were | compact and more     |
|            | a local object, making it       | efficient.           |
|            | easier for you to create        |                      |
|            | distributed applications and    |                      |
|            | services. This is enabled by a  |                      |
|            | formal Interface Definition     |                      |
|            | Language (IDL). gRPC utilizes   |                      |
|            | Protocol Buffers by default,    |                      |
|            | you can make it work with other |                      |
|            | data formats, such as JSON.     |                      |
+------------+---------------------------------+----------------------+

[]{#_heading=h.1d96cc0 .anchor}*Table 19: Types of API*

Example Technical Use Case Synchronous/Asynchronous API

The illustrative example below demonstrates a combination of a
synchronous API and an asynchronous API.

[]{#_heading=h.2ce457m .anchor}*Figure 48: Asynchronous Claims API*

The example above has 2 associated API specifications. The first is an
OpenAPI specification that describes the "Create Claim" and "Get Claim"
RESTful interactions and the second is an AsyncAPI specification that
describes the "Receive Updates" interaction. These example
specifications have been provided in the appendix of this document for
reference -- see [[Synchronous/Asynchronous Example
Specifications]{.underline}](#_heading=h.2vor4mt)

### API Design Principles

This section assumes that API Principles defined in section 4 of Part A
of this standard have already been read.

#### Future-Focused Design 

APIs should not be tightly coupled to legacy applications, exposing
whatever capabilities the legacy system offered. Nor should they be
designed to work in the way the legacy system currently works.

Instead they should be consumer driven -- so built to expose the
resources that consumers need, whether those resources are in legacy
systems or new. There should not be a drive to expose an entire product
via the API, or wait for the perfect backend system to be available.
Just offer as much as is practically useful, then evolve it to meet
needs. Design the API interface to be abstracted from the backend, so
that backend systems can be changed or replaced over time without
needing to change the interface.

The aim is to be future-focused (whilst still pragmatic) and develop
APIs to meet future needs. A good example of being future focussed is
building APIs to support HATEOAS (Hypermedia as the Engine of
Application State). This is where an API, in response to a consuming
application\'s request, is programmed to return hyperlinks (URLs) which
indicate the options for subsequent actions or information. See
[[section 2.7.7]{.underline}](#hateoas) for more details on HATEOAS.

#### Layering

When designing and developing an API it is important to consider that an
API is made up of distinct functional layers:

-   Security

-   Caching

-   Representation

##### Security

Every API will have a security component. It is important to recognise
that this is not only authentication and authorisation for access to an
API, it also includes threat protection (DDoS, SQL Injection, Cross site
scripting etc.) as well as availability and quality of service (QoS).
When designing and developing APIs it is often cost effective to create
a common framework that handles security for all APIs. See the
associated document, Part B, API Security, for more details.

##### Caching

Caching can dramatically improve the performance of an API. When
designing APIs consider what, when and where to cache. Understanding how
data is changed and how often it is changed is an important
consideration, as well as which layer it is most appropriate to cache
at. A common caching strategy should be developed for APIs that would
benefit from it. See [[section 2.12]{.underline}](#caching) for more
details.

##### Representation

When designing and developing an API it is important to consider the
representation of that API. This commonly includes an interface
specification that fully describes the API. To ensure the success of an
API it should be easy to consume driving a well-considered
representation layer.


[]{#_heading=h.2jxsxqh .anchor}*Figure 49: API Layering*

#### Standards-Based

Web standards have rapidly become powerful agreements, which span not
just local regions but are internationally accepted and enable
commonality and consistency. Using standard HTTP and URLs, the core
technologies of the web, along with standards such as JSON and OAuth
ensures that agencies are not creating bespoke or proprietary
technologies.

Hence the principle is to build to the latest versions of existing open
and accepted standards e.g. 

-   HTTP

-   OpenAPI

-   AsyncAPI

-   REST

-   JSON

-   OAuth

-   OIDC

Refer to the [[appendix]{.underline}](#_heading=h.3hej1je) for detailed
information about relevant standards.

### Designing an API

When designing an API, it is important to perform business process
analysis to ensure that API development is business-driven rather than
technology-driven. Technology driven projects rarely meet customers'
needs in the long run, so it important to gain background in who could
be using the API, for what. As mentioned previously, co-design is
fundamental to driving the right API development. To help identify
potential partners to involve in the co-design, consider:

-   processes which currently depend on information the API could expose

-   processes which require a capability an API could expose

Some actors will be human (e.g. application developers) whilst some
actors will be the systems which will interact with, or depend on, the
API. There may be different types of actors, some public sector, some
commercial entities, some public.

When representatives for the potential actors are identified, start
co-designing with these representatives. First and foremost, consider
the requirements for the API. Application developers often couch their
requirements in terms of how the API should work, rather than what the
API needs to do. Don't get bogged down in the variety of proposed
solutions from each developer: focus on extracting their true
requirements by performing functional analysis (e.g. use cases) and data
flow analysis. Then identify resources and work out the granularity
needed (see sections [[2.2.4 Designing an
API]{.underline}](#designing-an-api) & [[2.2.7
Granularity]{.underline}](#granularity)).

It is especially important that security and information privacy impacts
are identified up front and addressed early on in the design process.
Assess the information being passed and the types of access different
customers and/or consuming applications should have to the API. This
will help drive development of security policies alongside the design of
the API.

One common pitfall in API design is to map all existing data tables onto
resources and develop the associated CRUD capabilities into an API.
Usually this results in a poor API design and tightly couples the API
design to the underlying data structure. Another common pitfall is to
design APIs as an extension to, or way into, monolithic legacy systems.
This should be avoided as it tightly couples the API to the legacy
system. Both of these pitfalls will create issues for both provider and
consumers in the long term.

At this point in the design process, agility is probably more important
than completeness. Share early design thoughts and interface
specifications with the developer community and quickly make changes in
response to their feedback. Work through some sequence diagrams with
them to help pin down API interactions and inform API design thinking.

The correct API design will likely not please every developer, so don't
try to be all things to all developers. A rule of thumb is that you are
probably on the right track if most developers are a *little* unhappy,
but all are able to achieve their aims with the proposed design.

It is important not to try to bypass evolution steps and try to build
for all potential use cases right from the offset. For a more measured
progression towards API delivery, start simple and focus on a single
channel or interaction initially. By building onto these simple building
blocks, API evolution over time naturally progress towards omnichannel
applications. 

### Design Considerations

The following considerations emerge when looking to develop APIs in the
public sector:

-   Understand your data, understand your consumers. Before starting
    work on APIs, gain a good understanding of what data you hold, the
    complexity of that data, its relationships to other data, the
    downstream dependents on that data and potential consumers of the
    data. It is also a good idea to understand your consumers\' drivers
    and downstream usage or customers. 

-   Design for REST. If the interaction appears RESTful then develop a
    REST API, e.g. one-to-many. In some cases however, a gRPC or GraphQL
    API may be appropriate and are supported by this document. REST APIs
    are widely understood, easier to govern and suitable for most
    interoperability use cases. It is also important to note here that
    if there is an appropriate supported standard such as Fast Health
    Interoperability Resource (FHIR) then the resources defined in that
    standard should be used rather than a set of agency defined
    resources.

-   The information supplied via an API may still be dependent on
    overnight batch processes for update. It is worth making the
    information's timeliness and update period clear to potential
    consumers of the API.

-   APIs should not be used to handle large batch transfers because of
    the atomic nature of the usage i.e. if one single data write fails
    then the whole batch fails. APIs work better for multiple individual
    update transactions.

### Design Driven Development

**[Required]{.smallcaps}**

When building APIs, a Design Driven Approach must be taken.

This includes:

-   Interface specification first

-   Iterative approach

-   Continuous integration/testing

#### Interface Specification First

The best way to design an API is in collaboration with potential
consumers of that API. Creating the interface specification first makes
it easier for application developers to see what the API is going to
offer and how it could be used. Their early feedback will ensure that
the API design is heading on the right track and will be usable and
appropriate to their needs. Using a simple modelling language to define
the interface specification makes it easy to view and edit API
definitions. See [[section 2.2.8]{.underline}](#interface-specification)
for more information about defining interface specifications.

#### Iterative Approach

It has been acknowledged that big bang releases rarely deliver business
or customer benefit. An iterative approach, with ongoing releases
offering gradual improvement or evolving capability, gives a finer tuned
delivery, better sense of momentum, illustrates progress and enables
third parties to coordinate efforts with API developments. ICT.govt.nz
Accelerate
([[https://www.ict.govt.nz/guidance-and-resources/accelerate/]{.underline}](https://www.ict.govt.nz/guidance-and-resources/accelerate/))
offers a framework which supports this kind of development and has
guidance on how to deliver transformational projects.

An iterative approach incorporates continuous improvement, which
recognises the need to support continuing evolvement of the API beyond
the first delivery. The API is a product whose capabilities should
undergo continuing improvements based on consumer feedback, performance
analytics and emerging needs. This aligns to Phase 6 in the Accelerate
framework.

#### Automation First

Automation provides a quick turnaround for informing API developers
about breaking changes being submitted by developers who are all working
on the same code base or product (e.g. API). The idea is that all
developers submit code changes as often as possible (e.g. into a version
control system), allowing code to go through an automated, integrated
build process which ensures that nothing has broken the build. This
build process could happen many times a day. Any errors are quickly
identified and alerted to the team who can rectify them in a timely
fashion.

Tests can be written against the interface specification quite early on
in the development process by developing just enough API code to enable
the test to be run (stubs). The tests can then be incorporated into the
automated build process, giving early warning of regression test
failures. API code should not be able to progress through SDLC
environments until successful test execution.

### Granularity

There is a question as to how fine-grained an API resource should
be. APIs should be designed at the lowest practical level of granularity
because this makes each service simpler and allows them to be combined
in ways that suit the application developer. The key principle is to
design services that can be re-used and combined in different ways, and
not tie the application developer to a specific way of working or
sequence of API consumption just because that is how it is configured or
built in the back end.

If an API offers very fine-grained resources, then consuming
applications end up having to make many more calls to the API in order
to collect all the information they need, resulting in chattier
communications. On the other hand, if the API is based on very coarse
grained resources (returning everything about the resource) the response
payloads could end up being enormous, may not support all API
application developers' needs, and the API could become cumbersome to
use and maintain.

There may also be a need for varying granularity within one API,
depending on the purpose and use of that API. For example, if a blogging
API was being created, it may make sense to offer a coarse grained
resource for posting a new blog entry as a bundle of content including
pictures, sound, keywords as well as the textual blog entry. But when
offering the ability to like or comment on a blog entry it would make
sense, for clarity and ease of use, to offer these as separate
sub-resources, one for indicating a \'like\' and one for submitting a
comment.  

It is important to aim for a granularity which will prevent business
logic from leaking into the API e.g. requiring API calls to be made in a
certain sequence to meet with internal business processes. With the
blogging example, consider the impact of a fine-grained API being
offered for posting blog entries, with separate calls for adding images,
sounds and metadata. If metadata is mandatory, then the API application
developer needs to ensure that every blog post call is followed by a
metadata call. This puts the onus on the application developer to get
the sequence of calls correct and could lead to inconsistent data if
they do not adhere to the rules. It also leads to close coupling between
the consuming application and the API, and if the business logic changes
in the future there is a downstream impact on all application
developers, requiring them to modify their applications.

General guidelines are:

-   Don\'t aim for the finest granularity - an API should be built
    around each discrete and updateable resource

-   There does not need to be a one-to-one mapping between a manual
    service and a corresponding API; APIs should support the process but
    not try to encapsulate the process

-   A rough guide is to have one API operation for each entity lifecycle
    state transition

-   Resources can be identified by reviewing a business process and
    identifying the key entities which underpin the process. Any
    entities which the organisation manages or maintains throughout its
    full lifecycle will be potential API resources. There is typically
    one API operation for each entity lifecycle state transition.

-   There should be only one API function for one business outcome (e.g.
    change an address)

-   Consider using query parameters in URLs for different granularity of
    resources. For example, /passengers.json could return a list of
    names, whilst /passengers.json?detail=full could return detailed
    information about each passenger in a list.

### Interface Specification

An API represents a contract between the provider and the consumer for
access to provider resources. Because API consumption is a programmatic
exercise, it is important to have a clear definition of what the API
offers and how those API resources are to be accessed. This definition
is the interface specification. 

The interface specification should be designed in advance of developing
the API, as the act of working out the specification often helps think
through all the issues that could impact the design of the underlying
resource-handling code. It also helps consuming application developers
to review the capabilities being offered to see if the capabilities meet
their needs before they start developing to the specification. When
outsourcing API development, the interface specification can be written
in abstract as a means of defining the API the vendor should build. The
specification can be handled as a separate entity, is version
controllable, and it should be possible to use it as the main API
documentation or reference.  

There are several API modelling languages available for defining the
interface specification. Some are proprietary (e.g. RAML, API Blueprint)
whilst others are machine-readable but not human readable (e.g. WADL).
The most commonly used API modelling language today is an open standard
known as the OpenAPI Specification (formerly Swagger) maintained by the
Open API Initiative. This initiative is supported by many of the main
commercial entities in IT (Google, IBM, Microsoft, Atlassian, Paypal
etc.). It offers a standard, programming language-agnostic (JSON/YAML)
interface to REST APIs which allows both humans and computers to
discover and understand the capabilities of the service. For an example
of a Swagger interface specification see Appendix C - Example Interface
Specification.

It is important to use a modelling language to define the API interface
specification as essentially it is text or code and can be maintained
using source code management systems.

**[Recommended]{.smallcaps}**

Use [[OpenAPI/Swagger]{.underline}](https://openapis.org/) as the
interface specification language for all APIs being developed.

### Orchestration

As a general rule using APIs as an orchestration tool is not
recommended. This is due to the complexity that this can introduce to an
API architecture. That said, however, simple orchestration may in some
cases be appropriate. An example of this may be a mashup API that
creates a new logical API resource by combining related data held in two
or more back end systems.

A mashup is not appropriate when you create an API that merges two
distinct API products together. If a consumer requires this
functionality the mashup should be performed by the consuming
application.

Other examples of simple orchestration could include mediation such as
message transformation (JSON to XML or canonical message model
transformation).

### Software Development Kits (SDK)

**[Recommended]{.smallcaps}**

It is recommended that API Providers offer an SDK to developers of
consuming applications.

An SDK can be considered the implementation toolset for use of an
agency's APIs. By providing developers with an SDK they can build
applications faster without having to understand all of the API's
complexities. An SDK should provide sample code that explains the
functionality of your API to potential application developers.

An example of a public service API SDK can be found at the [[US
Department of Labour GitHub
repository](http://usdepartmentoflabor.github.io/Ruby-Sample-App/)]{.underline}
Publication/Catalogue

Once an API is in sufficient state to be offered to API consumers, the
API definition should be published to an API catalogue. The primary API
discoverer is the developer, so an external API must be well documented,
and provide accurate and up-to-date guidance via the catalogue.

Government are considering options for a central point of discovery for
externally accessible public sector APIs.

**[Recommended]{.smallcaps}**

Publishing to a catalogue is recommended for internal APIs.

**[Required]{.smallcaps}**

Publishing to a catalogue is required for external APIs.
