<!-- order:8 -->
## Consideration of state

In almost all cases a REST API should be entirely stateless. As part of
processing it is possible for an API to gather context and pass this to
a downstream system, however an API should not maintain that context for
future requests. This should not be confused with caching, as discussed
in [[section 2.12]{.underline}](#caching) of this document.
