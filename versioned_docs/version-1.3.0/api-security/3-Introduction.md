<!-- order:3 -->
## Introduction

According to Gartner, by 2022, API abuses will be the most-frequent
attack vector for enterprise web application data breaches. As such,
securing RESTful APIs is fundamental to the success of any API Strategy
or implementation; any approach should include the following three key
areas:

a.  Domain of Consideration

b.  Domain of Control

c.  Identity[^1]-centric and Holistic View

### Domain of Consideration

Developing and securing RESTful APIs is more than just applying
standards; it is a framework and state of mind that has to be understood
and followed jointly by the business owners, IT architects and
developers. The API Security framework must be defined at the
organisation and business level and should always consider who, how and
what users and applications (both internal and external to an
organisation) will interact with the APIs. These considerations should
be defined at the beginning of any project and driven from a desired
business outcome e.g. provide real time information for the public about
the closest location and address of a GP.


[]{#_Toc74234863 .anchor}Figure 11: API Security Considerations

### Domain of Control

The Domain of Control contains the components (defined further in this
document) that need to be developed, deployed and they need to work
together to provide API security to support:

-   Registered application developer access to the API

-   Authenticated and authorised consuming application access to the API
    or Events

-   Protected communication between the API, the Event Broker and the
    consuming application to ensure confidentiality and integrity

-   The ability for applications to act on behalf of a customer

### Identity Centric and Holistic View

The security of APIs should not just be seen as a bounded solution i.e.
only the components illustrated in security considerations above but
needs to be seen from a holistic perspective. It needs to incorporate
existing enterprise security frameworks where the management and
understanding of user identities is core. For example, securing an API
that is targeted for a mobile application is not just about applying an
OAuth profile, it should take into consideration how mobile devices and
applications are managed and secured and how the enterprise security
framework (e.g. authentication) can be leveraged.

[]{#_Toc74234864 .anchor}Figure 12: Identity Centric

People- (or User-) centric security frameworks are key to defining the
required access policies and controls for APIs. The management of
Identity (this includes users, device, servers and applications) should
be central to any API security framework.
