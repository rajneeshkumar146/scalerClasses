Design choices of the communication system in place

1. By design http was designed to be stateless

2. This communication was designed to be a client initiated
protocol.
a. Client initiates request to which server responds back

3. We tried to remove certain inefficiencies like create a new tcp
connection for every request
    a. In HTTP/1.1
        i. persistent connections were introduced to overcome
           this inefficiency. With persistent connections, also
           known as HTTP keep-alive, a single TCP connection
           can be reused for multiple HTTP requests and
           responses between a client and server.

        ii. Once a TCP connection is established, it remains
           open for subsequent requests and responses.

        iii. Requests are sent one after another over the same
           connection. Each request must wait for the previous
           one to complete before it can be sent.

        iv. Limitation: Head-of-Line Blocking: If one request takes
           a long time to process, it can delay all subsequent
           requests on the same connection.

    b. HTTP/2
        i. standardized in 2015, built upon the concept of
           persistent connections by introducing multiplexing.
           This allows multiple requests and responses to be
           simultaneously active on the same connection.

        ii. Multiple requests can be sent out at the same time,
           and responses can be received out of order. This is
           achieved by breaking down the data into frames,
           which can be interleaved on the same connection.

        iii. Benefit: Since multiple requests and responses can be
           processed simultaneously, one slow request does not
           block others
    
    c. Nevertheless they still remain client initiated model

## Limitations of http for real time communication
1. One-Way Communication
    a. The server cannot initiate communication with the client,
       which limits real-time interactions.

2. Overhead of HTTP Headers: Each HTTP request and response
carries a significant amount of header data. This overhead is
inefficient, especially for applications that need to send frequent,
small messages, like real-time chat messages or live price
updates in trading applications.

3. No Persistent Connections
    a. it does not allow for continuous, full-duplex communication
       where data can flow in both directions simultaneously.
    b. Full-duplex means that data can flow in both directions
       simultaneously, which is crucial for real-time applications

4. Latency Issues: HTTP's request-response nature can lead to
latency issues in real-time applications.
a. I need market updates for live tracker. I need to send
requests frequently to get the updates.

## Were there no chat applications prior to websockets ?

1. Chat applications and other real time kind of applications were
indeed created and widely used before the introduction of
WebSockets. However, the techniques used for these earlier chat
applications were different and had certain limitations compared
to the real-time capabilities provided by WebSockets.

2. Polling: In this approach, the client (typically a web browser)
would regularly send HTTP requests to the server to check for
new messages. This was a straightforward approach but
inefficient, as it involved sending requests at regular intervals
regardless of whether there were new messages, leading to
unnecessary network traffic and server load.

3. Long Polling: An improvement over traditional polling, long
polling involves the client sending a request to the server, which
then keeps the request open until new data (like a chat message)
becomes available or my request get timedout. Once the data is sent to the client, the
connection closes, and the client immediately opens a new
connection. This method reduces the amount of unnecessary
HTTP requests but still has higher latency compared to
WebSockets.

4. There were other ways too, should try to read about them