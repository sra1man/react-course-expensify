import React from 'react';
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpensifyDashboardPage from '../components/DashBoard';
import createExpensePage from '../components/CreateExpense';
import EditExpensePage from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFound';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/createExpense" className="is-active">Create Expense</NavLink>
        <NavLink to="/help" className="is-active">Help</NavLink>
    </header>
);

const AppRouter =() => (
    <BrowserRouter> 
    <div>
    <Header/>
        <Switch>
            <Route path="/" component={ExpensifyDashboardPage} exact={true}/>      
            <Route path="/createExpense" component={createExpensePage} />
            <Route path="/editExpense/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;