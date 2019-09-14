import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// explanation of file

// routing with react
// At the core of every React Router application should be a router component.
// For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers.
// Both of these will create a specialized history object for you.
// Generally speaking, you should use a <BrowserRouter> if you have a server that responds to requests and a <HashRouter> if you are using a static file server.

// routing matching with react
// when using a react router there are two route matching components : <Route> and <Switch>
// Route matching is done by comparing a <Route>'s path prop to the current location’s pathname.
// When a <Route> matches it will render its content and when it does not match, it will render null.
// A <Route> with no path will always match.
// You can include a <Route> anywhere that you want to render content based on the location.
// It will often make sense to list a number of possible <Route>s next to each other.
// The <Switch> component is used to group <Route>s together.
// The <Switch> is not required for grouping <Route>s, but it can be quite useful.
// A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location.
// This helps when multiple route’s paths match the same pathname, when animating transitions between routes, and in identifying when no routes match the current location (so that you can render a “404” component).

// route rendering props
// You have three prop choices for how you render a component for a given <Route>: component, render, and children.

// navigation
// React Router provides a <Link> component to create links in your application.
// Wherever you render a <Link>, an anchor (<a>) will be rendered in your application’s HTML.
// The <NavLink> is a special type of <Link> that can style itself as “active” when its to prop matches the current location.
//Any time that you want to force navigation, you can render a <Redirect>.
// When a <Redirect> renders, it will navigate using its to prop.
