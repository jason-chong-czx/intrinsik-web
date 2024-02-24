import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./library/helper";
import ToastManager from "./components/toast";

// pages
import LoginPage from "./pages/login";
import InvoiceManagement from "./pages/dashboard";
import NotfoundPage from "./pages/notfound";
import InvoiceNotfoundPage from "./pages/invoicenotfound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/payment/" component={LoginPage} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/dashboard" component={InvoiceManagement} />
          <Route path="*" component={NotfoundPage} />
        </Switch>
      </Router>

      <ToastManager />
    </>
  );
}

export default App;
