<!-- order:4 -->
## HTTP Verbs

Access to REST APIs must be via the standard HTTP verbs: GET, PUT, POST,
DELETE in line with the [[W3C
Standard]{.underline}](https://www.w3.org/2001/tag/doc/whenToUseGet.html)
namely:

+-------------+--------------------------------------------------------+
| **Verb**    | **Common Usage**                                       |
+=============+========================================================+
| GET         | For retrieval of information                           |
|             |                                                        |
|             | If the interaction is more like a question (i.e. it is |
|             | a safe operation such as a query)                      |
+-------------+--------------------------------------------------------+
| POST        | To create a piece of information or resource item      |
|             |                                                        |
|             | To spawn an action                                     |
|             |                                                        |
|             | If the interaction is like placing an order            |
|             |                                                        |
|             | If the interaction changes the state of the resource   |
|             | in a way that the user would perceive (e.g. a          |
|             | subscription to a service)                             |
|             |                                                        |
|             | If the user be held accountable for the results of the |
|             | interaction                                            |
+-------------+--------------------------------------------------------+
| PUT         | To update an existing resource item                    |
|             |                                                        |
|             | To replace an existing resource item                   |
+-------------+--------------------------------------------------------+
| DELETE      | To delete a resource item                              |
+-------------+--------------------------------------------------------+
| OPTIONS     | To retrieve information about what the consumer is     |
|             | allowed to do with the resource                        |
+-------------+--------------------------------------------------------+
| PATCH       | Not recommended due to complexity                      |
+-------------+--------------------------------------------------------+
| HEAD        | Rarely used, but used to retrieve metadata about a     |
|             | resource                                               |
+-------------+--------------------------------------------------------+

[]{#_heading=h.2981zbj .anchor}Table 22: HTTP Verbs
