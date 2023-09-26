<!-- order:4 -->
## Definitions

This version of the API Guidelines expends its remit, its main focus is
still on REST but GraphQL, AsyncAPI and gRPC specifications are included
under the banner of APIs.

These additional types of API are covered in Section C (API Development)
but from a high-level perspective the definitions below apply to all
four API types.

For this standard the following definitions are used:

-   **Authentication** is the process of verifying the identity of a
    customer (or device) who presents identity credentials and
    authentication key(s);

-   **Authentication Authority --** is a system entity that provides
    authentication services to ensure only permitted customers (or
    devices) gain access

-   **Authorisation** is the process of verifying that a customer (or
    device) has the right to perform an action and what they are allowed
    to access;

-   **Availability** is the ability to minimise API downtime by
    implementing threat protection;

-   **Confidentiality** is the ability to ensure information that is
    sent between Users, Applications and Servers is only visible to
    those authorised to use it;

-   **Delegation** is when a user authorises another user (or device) to
    serve as his or her representative for a particular task;

-   **Delegated Authorisation** is a framework that defines how an owner
    of a set of resources can grant access (delegate) to a designated
    user or consuming application to perform actions on some of those
    resources on the owner's behalf, but without sharing their
    credentials;

-   **Federation** is the process that allows for the leverage and reuse
    of identity credentials to multiple Authentication Authorities for
    authentication and/or Single Sign On;

-   **Integrity** is the ability to ensure that information received has
    not been modified by a third party, also providing non-repudiation
    services;

-   **Provisioning** is the automated or manual service for aggregating
    and correlating identity data resulting in the creation of user (IT)
    accounts and the delivery of user meta data used by systems to
    define access policies and controls for services.

-   **Threat protection** is the service for protecting APIs (at the
    ingress and egress points of an organisation) from known threats
    (e.g. the OWASP top 10) by preventing misuse or loss of
    availability. Note: Threat protection should also be addressed at
    the OS hardening level and should be an integral part of the API
    software development;

-   **User Managed Access** has been developed to provide a user data
    delegation model which enables a resource owner to control the
    authorisation of data sharing and other protected-resource access
    made between online services on the owner's behalf or with the
    owner's authorisation by an autonomous requesting party;

-   **Consent Management** is the process that manages the collection of
    user data, ensuring that the required policies are applied, and the
    required consent has been obtained from the user, allowing the user
    to understand how the data is used and to be able to opt out if
    required. This is being driven by many global Privacy Laws.

-   **Zero Trust (ZT)** is the term for an evolving set of cybersecurity
    paradigms that move network defences from static, network-based
    perimeters to focus on users, assets, and resources. A zero-trust
    architecture (ZTA) uses zero-trust principles to plan enterprise
    infrastructure and workflows. Zero trust assumes there is no
    implicit trust granted to assets or user accounts based solely on
    their physical or network location

> ***Note***: A customer/user can be internal or external to a
> Government Agency.
