<!-- order:7 -->
## Building Secure APIs

> Building in security starts from the ground up, so development of APIs
> needs to be done with awareness of the API security risks associated
> with the resources and information being exposed, and with appropriate
> mitigations in place for these API security risks.
>
> When developing an API is it advisable to carefully consider potential
> malicious use, especially:

-   PUTs and POSTs -- which change internal data and could be used to
    attack or misinform

-   DELETEs -- which could be used to remove the contents of an internal
    resource repository

> Standard secure coding practices are always recommended (see [[OWASP
> Security by Design
> Principles]{.underline}](https://wiki.owasp.org/index.php/Security_by_Design_Principles)),
> in line with New Zealand Information Security Manual (NZISM) guidance.
> But API development should take special note of the following:

-   Design Driven Development (refer to Part C)

-   [[OWASP Top
    Ten]{.underline}](https://owasp.org/www-project-top-ten/) -- A
    summary of the standard attacks and mitigations

-   [[REST Security Cheat
    Sheet]{.underline}](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
    -- REST-specific risks and how to prevent them, e.g. input
    validation

-   [[OWASP API Security
    Project]{.underline}](https://owasp.org/www-project-api-security/)
    -- Top 10 API-specific risks and how to prevent them

> The [[OWASP Cheat Sheet
> Series]{.underline}](https://cheatsheetseries.owasp.org/index.html)
> provides cheat sheets on a variety of security-related subjects. It is
> worth reviewing them to see if others may apply to your specific
> circumstances. Special note should be taken of the following where
> your API accepts input values as parameters:

-   [[OWASP Input Validation Cheat
    Sheet]{.underline}](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
    -- A summary of input risks and mitigations

-   [[OWASP Cross Site Scripting Prevention Cheat
    Sheet]{.underline}](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
    -- how to escape inputs to prevent cross site scripting

-   [[OWASP SQL Injection Prevention Cheat
    Sheet]{.underline}](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
    -- ensuring database queries are built internally

-   [[OWASP Query Parameterization Cheat
    Sheet]{.underline}](https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html)
    -- examples of SQL injection and stored procedure vulnerabilities

> It is also recommended that a security testing capability be
> incorporated into the development cycle which provides continuous,
> repeatable and automated tests to find security vulnerabilities in
> APIs and web applications during development and testing.

### API Security Design Principles 

> The following are key principles that should be applied when designing
> API security frameworks:

1.  Design with the objective that the API will eventually be accessible
    from the public internet, even if there are no plans to do so at the
    moment

2.  Security first -- build security into the API when they are being
    developed

3.  Use a common authentication and authorisation pattern, preferably
    based on existing security components: avoid creating a bespoke
    solution for each API

4.  Least Privilege - Access and authorisation should be assigned to API
    consumers based on the minimal amount of access they need to carry
    out the functions required, and strong authentication and
    authorization models are applied

5.  Maximise entropy (randomness) of security credentials by using API
    Keys rather than username and passwords for API authorisation, as
    API Keys provide an attack surface that is more challenging for
    potential attackers

6.  Balance performance with security with reference to key life times
    and encryption / decryption overheads

7.  Manage the exposure and lifetime of all APIs, and ensure all
    organisation APIs are covered by proactive scanning

8.  Validate the content of all incoming messages, ensuring
    communications are secured (i.e. encrypted) and apply threat
    protection policies (e.g. Injection and throttling).

# Usage Patterns

> Different API usage patterns require different authentication and
> authorisation models, below is a short definition of each of the
> different usage patterns.
>
> Note: The Security components defined in the following diagrams are
> located, for simplicity, in the "trusted" zone i.e. an area managed by
> an agency. It is possible that these components could reside in
> different zones which relate to varying levels of trust (e.g. a DMZ).
