import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { User, Session } from '../../requests'
import CategoryIndexPage from '../CategoryIndexPage'
import CategoryShowPage from '../CategoryShowPage'
import NewCategoryPage from '../NewCategoryPage'
import NewBookPage from '../NewBookPage'
import NewReviewPage from '../NewReviewPage'
import SignInPage from '../SignInPage'
import AuthRoute from '../AuthRoute'
import NewUserPage from '../NewUserPage'
import NavBar from '../NavBar'
import BookShowPage from '../BookShowPage'
import BookIndexPage from '../BookIndexPage'
import EditBookPage from '../EditBookPage'
import ReviewIndexPage from '../ReviewIndexPage'
import { WelcomePage } from '../WelcomePage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
    }
    this.getUser = this.getUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  destroySession = () => {
    Session.delete().then(() => {
      this.setState({ currentUser: null })
    })
  }

  getUser() {
    User.current().then((data) => {
      console.log(data)
      this.setState({
        currentUser: data,
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar
            currentUser={this.state.currentUser}
            signOut={this.destroySession}
           
          />

          <Switch>
            <Route path='/' exact component={WelcomePage} />
            <Route path='/categories' exact component={CategoryIndexPage} />
            <Route path='/categories/new' exact component={NewCategoryPage} />
            {/* <Route path='/categories/:categoryId/books/new'component={NewBookPage}/> */}

            <AuthRoute
              isAuthenticated={this.state.currentUser}
              component={NewBookPage}
              path='/categories/:categoryId/books/new'
            />

            <Route path='/books/new' exact component={NewBookPage} />
            {/* <Route path='/books/:id/reviews/new' exact component={NewReviewPage} /> */}
            <Route
              path='/categories/:categoryId/books/:id/edit'
              component={EditBookPage}
            />
            <Route
              path='/categories/:categoryId/books/:id'
              component={BookShowPage}
            />
            <Route path='/books/:id/reviews' component={ReviewIndexPage} />
            <Route path='/categories/:id/books' component={BookIndexPage} />
            <Route path='/categories/:id' component={CategoryShowPage} />
            <Route
              path='/sign_in'
              render={(routeProps) => (
                <SignInPage {...routeProps} signIn={this.getUser} />
              )}
            />
            <Route path='/users/new' component={NewUserPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

export default App
