<!-- order:6 -->
## Security Reference Architecture

> This section describes an API Security Reference Architecture and its
> component parts to inform the construction of an API security
> framework.
>
> It is important to note that REST, gRPC, GraphQL and AsyncAPI are
> different architectural models for building synchronous and
> asynchronous APIs that can leverage the Security Controls (e.g. OAuth
> 2.0 and OpenID Connect) defined in this document; but they all have
> their own intrinsic security models (e.g. throttling consideration in
> GraphQL) that are not covered in this document.

### Actors and Security Functional Capabilities

> Identity and Access Management defines the actors (users and devices)
> who interact with system components that manage and expose APIs.
> Figure 13 shows a typical model of API components (support stack) and
> actors. The actors and components are described in Table and Table 8.

[]{#_Toc74234865 .anchor}Figure 13: API Actors & Core Components

> The green areas highlight internal actors while the yellow areas
> highlight the external actors.
>
> The components defined remain valid no matter what API architecture
> (internal, cloud, hybrid) is implemented.

+-----------+----------------------------------------------------------+
| Actors    |                                                          |
| and       |                                                          |
| Devices   |                                                          |
+===========+==========================================================+
| External  | -   Customers - the public, other agencies and partners  |
| Users     |     who use consuming applications to access resources   |
|           |     via APIs.                                            |
|           |                                                          |
|           | -   External application developers who build software   |
|           |     to access resources via APIs                         |
+-----------+----------------------------------------------------------+
| Devices   | -   PC Browsers running web applications                 |
|           |                                                          |
|           | -   Mobile Devices running apps                          |
|           |                                                          |
|           | -   Servers running systems with server-to server        |
|           |     communications                                       |
+-----------+----------------------------------------------------------+
| Internal  | -   Internal API Developers who build APIs               |
| Users     |                                                          |
|           | -   Internal Application Developers who build software   |
|           |     which accesses resources via APIs                    |
|           |                                                          |
|           | -   Business Owners responsible for the API product(s)   |
|           |                                                          |
|           | -   Security responsible for ensuring the APIs are       |
|           |     secure                                               |
+-----------+----------------------------------------------------------+

[]{#_Toc74234992 .anchor}Table 8: Actors & Devices

> The core components of an API Security Framework (the development
> portal, manager and gateway) provide a grouping of functionality.
> These functions can be delivered with discrete applications, or
> bespoke code development, via COTS products or through leveraging
> existing devices that can be configured to provide these functions /
> services. Note: some of the functionality may overlap or be combined
> into one or more products depending on the vendor used.
>
> The following lists the functions of a mature API delivery and
> security framework for an agency that is working with the development
> community. Together, these functions provide full support for the
> application developer building and developing consuming applications
> that will use the API(s) exposed by the agency.
>
> Depending on the requirements of the agency, some of these functions
> might not be required e.g. if the agency API exposed is purely for
> public consumption and only allows consuming applications to read
> information, then only a solution for enforcing threat protection
> (i.e. Denial of Service) might be required, and this could be
> delivered using an existing service protection capability.

+-----------+----------------------------------------------------------+
| Core      |                                                          |
| C         |                                                          |
| omponents |                                                          |
+===========+==========================================================+
| API       | The API Portal often provides the following functions    |
| Portal    | for internal and external application developers:        |
|           |                                                          |
|           | -   Discovery of APIs                                    |
|           |                                                          |
|           | -   Analytics to monitor APIs                            |
|           |                                                          |
|           | -   Access to specifications and descriptions of APIs,   |
|           |     including SLAs                                       |
|           |                                                          |
|           | -   Social network capability to share and publish ideas |
|           |                                                          |
|           | Also supports the development, build and test of         |
|           | consuming applications.                                  |
+-----------+----------------------------------------------------------+
| API       | The API Manager functions cover:                         |
| Manager   |                                                          |
|           | -   Centralised API administration and governance for    |
|           |     API catalogues                                       |
|           |                                                          |
|           | -   Management of registration and on-boarding processes |
|           |     for communities of API developers                    |
|           |                                                          |
|           | -   Lifecycle Management of APIs                         |
|           |                                                          |
|           | -   Applying pre-defined security profiles               |
|           |                                                          |
|           | -   Security policy administration / definition          |
|           |                                                          |
|           | -   Policy evaluation                                    |
+-----------+----------------------------------------------------------+
| API       | The API Gateway capability can provide the following:    |
| Gateway   |                                                          |
|           | -   Act as the API proxy or the host acting as the       |
|           |     primary point of access for exposed APIs             |
|           |                                                          |
|           | -   Enforce threat protection, throttling and quota      |
|           |     management                                           |
|           |                                                          |
|           | -   Authorisation Services to control access to APIs     |
|           |                                                          |
|           | -   Authentication Services to ensure only permitted     |
|           |     users (internal/external) have access to the API     |
|           |                                                          |
|           | -   Security Policy enforcement                          |
|           |                                                          |
|           | -   Monitoring and analytics for business and security   |
|           |     analysts                                             |
+-----------+----------------------------------------------------------+
| Event     | The Event Broker (or \"broker\") is responsible for      |
| Broker    | receiving events (aka messages) from publishers          |
|           | (services) and delivering them to subscribers            |
|           | (services), that is, the consumers who have registered   |
|           | interest in events of that type.                         |
|           |                                                          |
|           | Brokers often store events until they are delivered,     |
|           | which is what makes event driven architectures very      |
|           | resilient to failures. Examples of brokers are RabbitMQ, |
|           | Apache Kafka and Solace.                                 |
|           |                                                          |
|           | With the emergence of an AsyncAPI standard, event driven |
|           | architectures are becoming more prevalent.               |
+-----------+----------------------------------------------------------+
| API       | OpenAPI (REST APIs) and AsyncAPI are API (message and    |
| Docu      | event-based APIs) documentation specifications in a      |
| mentation | machine-readable format                                  |
|           |                                                          |
|           | [[https://github.com/asyncapi/bind                       |
|           | ings]{.underline}](https://github.com/asyncapi/bindings) |
+-----------+----------------------------------------------------------+
| API       | Business owners and security specialists need to be able |
| M         | to monitor the use of APIs:                              |
| onitoring |                                                          |
| and       | -   Monitor uptake of API services                       |
| Analytics |                                                          |
|           | -   Define when to deprecate an old version              |
|           |                                                          |
|           | -   Profile usage for business                           |
|           |                                                          |
|           | -   Profile usage for security baselines                 |
|           |                                                          |
|           | -   Detect and respond to security events (SEIM)         |
|           |                                                          |
|           | This helps adapt to change in usage/demand.              |
+-----------+----------------------------------------------------------+
| C         | The credential stores are identity and key stores which  |
| redential | are used to securely store:                              |
| Stores    |                                                          |
|           | -   Internal and external user objects, and possibly     |
|           |     groups                                               |
|           |                                                          |
|           | -   API keys and secrets, certificates etc.              |
|           |                                                          |
|           | These stores are used by the API Gateway for             |
|           | authorisation and authentication services                |
+-----------+----------------------------------------------------------+

[]{#_Toc74234993 .anchor}Table 9: Core Components

> The model can also be split, with the API support stack duplicated --
> one set to support internal API usage and one set to support external
> use:

[]{#_Toc74234866 .anchor}Figure 14: Split API Support Stack

> Authentication, authorisation, confidentiality, integrity and
> availability can be applied across the components in the support
> stack, depending on component capabilities.
>
> The actual configuration and location of the API functional
> capabilities will vary depending on individual circumstances (e.g.
> some capabilities may be internal, some may be in the cloud, where API
> development is outsourced then 'internal' functional stack may belong
> to the outsourcer etc.). Also, some components might not be required
> or can be developed in house.
