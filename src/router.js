const handlers = require("./handlers.js");

const router = (request, response) => {
    const endpoint = request.url;

    if (endpoint === "/") {
        handlers.handleHome(request, response);

    } else if (endpoint.startsWith("/public")) {handlers.handlePublic(request, response, endpoint)
    } 
    else if (endpoint.startsWith("/login")) {handlers.handleLogin(request, response, endpoint);
    }
    else if (endpoint.startsWith("/game")) {handlers.handleGame(request, response, endpoint);
    }
       //don't need logout endpoint as redirect to "/"
    else if (endpoint.startsWith("/logout")) {handlers.handleLogout(request, response, endpoint);
    }
    else if (endpoint.startsWith("/result")) { handlers.handleSubmit (request, response, endpoint);
    } 
    else if (endpoint.startsWith("/table")) { handlers.handleTable (request, response);
    } 
    else if (endpoint.startsWith("/honour")) {handlers.handleHonour (request, response);}
     
    else if (endpoint.startsWith("/resultsA")) {handlers.handleA (request, response)
    } 
    else if (endpoint.startsWith("/resultsD")) {handlers.handleD (request, response) 
    } 
    else {
        response.writeHead(404, {
            "Content-Type": "text/html"});
            response.end("Sorry, you're lost beyond the wall. Find your way home");
        };
}

module.exports = router;


