import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CategoryIndexPage from '../CategoryIndexPage'
import CategoryShowPage from '../CategoryShowPage'
import NewCategoryPage from '../NewCategoryPage'
import NewBookPage from '../NewBookPage'
import SignInPage from '../SignInPage'
import NewUserPage from '../NewUserPage'
import NavBar from '../NavBar'
import BookShowPage from '../BookShowPage'
import BookIndexPage from '../BookIndexPage'
import EditBookPage from '../EditBookPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: false,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/categories' exact component={CategoryIndexPage} />

            <Route path='/categories/new' exact component={NewCategoryPage} />
            <Route
              path='/categories/:categoryId/books/new'
              component={NewBookPage}
            />
            <Route path='/books/new' exact component={NewCategoryPage} />
            <Route
              path='/categories/:categoryId/books/:id/edit'
              component={EditBookPage}
            />
            <Route
              path='/categories/:categoryId/books/:id'
              component={BookShowPage}
            />

            <Route path='/categories/:id/books' component={BookIndexPage} />
            <Route path='/categories/:id' component={CategoryShowPage} />
            <Route path='/sign_in' component={SignInPage} />
            <Route path='/users/new' component={NewUserPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
