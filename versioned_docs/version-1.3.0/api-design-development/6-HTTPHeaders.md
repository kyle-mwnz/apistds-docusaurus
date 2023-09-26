<!-- order:6 -->
## HTTP Headers

### Request Headers

+--------------+------------------+--------+--------+--------+--------+
| Header       | Usage            | GET    | POST   | PUT    | DELETE |
+==============+==================+========+========+========+========+
| Accept       | Indicates        | Re     | Re     | Re     | N/A    |
|              | desired format   | quired | quired | quired |        |
|              | of the response  |        |        |        |        |
|              |                  |        |        |        |        |
|              | If set to a      |        |        |        |        |
|              | value that       |        |        |        |        |
|              | cannot be        |        |        |        |        |
|              | supported by the |        |        |        |        |
|              | server, API      |        |        |        |        |
|              | responds with    |        |        |        |        |
|              | 406 (not         |        |        |        |        |
|              | acceptable)      |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| Content-Type | Indicates the    | N/A    | Re     | Re     | N/A    |
|              | format of the    |        | quired | quired |        |
|              | payload provided |        |        |        |        |
|              | on the request   |        |        |        |        |
|              |                  |        |        |        |        |
|              | If not supported |        |        |        |        |
|              | by the server,   |        |        |        |        |
|              | API responds     |        |        |        |        |
|              | with             |        |        |        |        |
|              | 415 (Unsupported |        |        |        |        |
|              | Media Type)      |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| A            | To provide       | Req    | Req    | Req    | Req    |
| uthorization | authorization    | uired, | uired, | uired, | uired, |
|              | information --   | unless | unless | unless | unless |
|              | type and token,  | a      | a      | a      | a      |
|              | depending on     | public | public | public | public |
|              | authorization    | API    | API    | API    | API    |
|              | type             |        |        |        |        |
|              |                  |        |        |        |        |
|              | If token is not  |        |        |        |        |
|              | valid for the    |        |        |        |        |
|              | request, API     |        |        |        |        |
|              | responds with    |        |        |        |        |
|              | 401              |        |        |        |        |
|              | (Unauthorized)   |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| Acc          | Advertises what  | Should | Should | Should | N/A    |
| ept-Encoding | compression      | use    | use,   | use,   |        |
|              | algorithm the    |        | if     | if     |        |
|              | consuming        |        | re     | re     |        |
|              | application is   |        | sponse | sponse |        |
|              | able to          |        | body   | body   |        |
|              | understand       |        | ex     | ex     |        |
|              |                  |        | pected | pected |        |
|              | If encoding not  |        |        |        |        |
|              | supported by the |        |        |        |        |
|              | server, API      |        |        |        |        |
|              | responds with    |        |        |        |        |
|              | uncompressed     |        |        |        |        |
|              | response         |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| {API Key     | Send the API     | Req    | Req    | Req    | Req    |
| Header}      | Keys with every  | uired, | uired, | uired, | uired, |
|              | request          | if     | if     | if     | if     |
| Note: there  |                  | issued | issued | issued | issued |
| is no set    | If keys are not  |        |        |        |        |
| naming       | valid, API       |        |        |        |        |
| standard for | response with    |        |        |        |        |
| an API Key   | 401 (Not         |        |        |        |        |
| Header       | authorised)      |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| If_Modi      | Makes the        | Should | N/A    | N/A    | N/A    |
| fied_Since/I | request          | use    |        |        |        |
| f-None-Match | conditional; the |        |        |        |        |
|              | server will      |        |        |        |        |
|              | respond with the |        |        |        |        |
|              | resource only if |        |        |        |        |
|              | the specified    |        |        |        |        |
|              | condition is     |        |        |        |        |
|              | met.             |        |        |        |        |
|              |                  |        |        |        |        |
|              | If condition is  |        |        |        |        |
|              | not met, API     |        |        |        |        |
|              | responds with    |        |        |        |        |
|              | 304 (Not         |        |        |        |        |
|              | Modified)        |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+
| {Request     | Unique           | Should | Should | Should | Should |
| tracking     | identifier that  | use    | use    | use    | use    |
| Headers}     | can be used to   |        |        |        |        |
|              | trace a request  |        |        |        |        |
| Note: there  | throughout its   |        |        |        |        |
| is no set    | lifecycle        |        |        |        |        |
| naming       |                  |        |        |        |        |
| standard for |                  |        |        |        |        |
| a            |                  |        |        |        |        |
| transaction  |                  |        |        |        |        |
| ID header    |                  |        |        |        |        |
+--------------+------------------+--------+--------+--------+--------+

[]{#_heading=h.302dr9l .anchor}*Table 22: Request Headers*

### Response Headers

  ------------------------------------------------------------------------------------
  Response Headers   Usage                 GET        POST        PUT         DELETE
  ------------------ --------------------- ---------- ----------- ----------- --------
  Content-Type       Indicates the format  Required   Required,   Required,   N/A
                     type of the response             if response if response 
                                                      body        body        
                                                      returned    returned    

  Location           Indicates the         Required   Should use, N/A         N/A
                     absolute URI of the   for 302    if resource             
                     newly created         redirect   created                 
                     resource item                                            

  Content-Location   Indicates the         Should use Should use, Should use  N/A
                     absolute URI of the              if resource             
                     requested resource               returned                

  Cache-Control      Directives to control Should use Should use  Should use  N/A
                     caching behaviour                                        
                     external to the API                                      
                     layer (e.g. CDN                                          
                     caching)                                                 

  Expires            Used in conjunction   Should use Should use  Should use  N/A
                     with Cache-Control                                       
                     for backwards                                            
                     compatibility                                            

  ETag               Concurrency control   Should use Should use  Should use  Should
                     header                                                   use
  ------------------------------------------------------------------------------------

[]{#_heading=h.2eclud0 .anchor}*Table 23: Response Headers*

### Customer X-HTTP Headers

X- notation headers have been deprecated as per
[[RFC6648]{.underline}](https://tools.ietf.org/html/rfc6648)[^1] and
should not be used. This standard appreciates that X- notation headers
are widely used however this document recommends that where an agency is
defining a custom header the X- notation should not be used and the
agency defines a custom header notation that is relevant. For example,
*X-Request-Id* should be redefined as *Request-Id*.
