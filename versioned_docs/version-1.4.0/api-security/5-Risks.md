<!-- order:5 -->
## Risks 

[APIs are another channel into an organisation's resources and
information. Most organisations are accustomed to exposing a web
interface, with good control over what information is released via that
interface. APIs offer direct, machine to machine access to resources and
information, which makes it less obvious when information is incorrectly
exposed. It becomes increasingly important for internal business
stakeholders to decide what information and resources should be released
via this channel, and to whom.]{.mark}

[The security risks that APIs introduce will be similar to the
traditional risks experienced on any web channel (web sites and web
applications), except there is:]{.mark}

-   Increased attack surface due to more ways in, multiple services to
    potentially exploit 

-   Risk of inadvertently exposing back-end data, back-end architecture
    and back-end applications

-   Potential for greater consequences if your API is
    compromised/hijacked and serves up malicious payloads to consumers

-   Greater privacy concerns where APIs involve personally identifiable
    information

-   Risks of malware in uploaded files due to performance overhead or
    lack on inline scanning

-   Risk of malformed APIs that are developed with limited security
    validation and inappropriate security validation

-   Risk related to cloud and container-based systems where security
    best practices are not applied.

Risks posed by APIs include loss of integrity, confidentiality and
availability of data, for example:

-   Loopholes retrieving API resources may offer access to more
    information than was intended (especially if fields requested are
    built straight into a DB query)

-   Write operations offer a means of polluting data stores, feeding
    misinformation into a system

-   Write operations could be used to form a Denial of Service attack by
    overloading the server or data store

-   Use of wildcards in search fields can shut down APIs and back-end
    applications

-   Cross site scripting attacks made possible by consuming applications
    not checking user inputs

-   SQL injection into consuming applications which cause database
    damage at the API backend

-   Parameter attacks such as HTTP Parameter Pollution (HPP)

-   Man-in-the-middle attacks, modifying API requests or responses
    leading to data eavesdropping or misinformation insertion

-   Subverting authentication or authorisation mechanisms to spoof
    messages from legitimate consumers

-   Credential leakage or stealing authentication tokens to obtain
    information illicitly

-   System information leakage through API error messages revealing
    details about an API's construction or underlying system makeup

-   Broken Session IDs, Keys and authentication create exposure to
    unauthorized access through authentication factors that are not
    functioning because of poor security design or technology bugs.

-   Other broken resource identifiers, authentication and authorisation
    mechanisms, allowing attackers to exploit flaws to obtain access,
    either temporarily or permanently.

-   Exposing too much information through the use of generic resource
    APIs rather than specialising APIs for each specific circumstance

### Mitigation Approach

API risks need to be mitigated in a number of ways. There is no single
off-the-shelf security solution which can be dropped in to address all
aspects of API security. APIs need to be secure by design; security
needs to be built in from scratch and be considered within the context
of existing protection mechanisms.

The main areas that API Security covers are:

a.  Identity and Access Management (IdAM) to provide the following
    services:

    -   Authentication

    -   Authorisation and delegated authority

    -   Federation

b.  Confidentiality

c.  Integrity

d.  Availability and Threat Protection

e.  Logging, Alerting and Incident Management

This ensures that:

-   The consuming application is known and can only get access to API
    resources they are allowed to

-   Message content has not been tampered with between consumer and
    provider

-   Resources are reliably from the provider intended when the consuming
    application made the request

-   The API will be available when needed, and not brought down by
    attacks from malicious consuming applications

In order to address API security risks, a security framework is needed
which encapsulates all the aspects of security listed above.

### Zero Trust and Decoupled Environments

A Zero Trust Network Access model has been talked about for a number of
years. In the current environment it is now seen by many analysts as the
direction organisations need to take. This section highlights areas of
the model that can help mitigate risks related to APIs.

Zero Trust Architecture[^2] removed the concept of trusted internal and
untrusted external networks and focuses on the policy of "never trust
always verify".

The selection of cloud services has changed this security model to one
where all actors (employees, partners etc) require access controls no
matter where they are coming from or on.

Zero Trust is seen as an architecture that is critical for organisations
moving towards decoupled microservices and API architectures.

Microservices architectures are the backbone of many API services
offered by organisations and have embraced the concepts of identity and
how permissions are created and enforced between different services.

Every microservice requires an identity which can be confirmed, and the
required permissions and policies applied which should be based on
attributes and contextual access.

The following are some of the areas that need to be considered by an
organisation when planning their implementation of Zero Trust:

-   Apply Strong Identification and Authentication

-   Build a digital trust model that is dynamic, and trust is only valid
    for the current session

-   Constant evaluation

-   Always authenticate

-   Apply contextual authorisation (Attributes, Consent, Location, Time,
    behaviour etc)

-   Build in a Digital Risk capability that maps to a level of
    confidence and constantly re-evaluates

-   Leverage IAM capability from Identity proofing to Adaptive
    Authentication

-   Incorporate Endpoint security

-   Transaction Level verification and Continuous session validation

-   Ensure Data Security is applied with reference to Encryption and
    User privacy controls including consent management

-   Implement strong Auditing, Logging, Event reporting and Forensics
    providing insight and behavioural patterns

-   Smart Threat detection with Machine Learning

-   Inject Identity context into the API traffic (User, Application,
    Device etc)

-   Use JWT to provide secure and validated claims, which can also be
    encrypted

-   Apply Fine grained access at the egress point, allowing the
    Enforcement point to allow, block filter or modify the response

-   Identity Propagation to backend services to make decisions

-   JWTs limit chatter in microservice environments

-   All APIs should be secured and treated as if they are public APIs.
