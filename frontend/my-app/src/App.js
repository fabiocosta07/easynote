import './App.css';

function App() {
  return (
    <div class="container">
        <div class="row">
          <div class="col">
              <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="container">
                  <a href="#" class="navbar-brand mr-3">EasyNote</a>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="#" class="nav-item nav-link active">Home</a>
                            <a href="#" class="nav-item nav-link">Services</a>
                            <a href="#" class="nav-item nav-link">About</a>
                            <a href="#" class="nav-item nav-link">Contact</a>
                        </div>
                        <form class="form-inline ml-auto">
                            <input type="text" class="form-control mr-sm-2" placeholder="Search"/>
                            <button type="submit" class="btn btn-outline-light">Search</button>
                        </form>                            
                        <div class="navbar-nav ml-auto">
                            <a href="#" class="nav-item nav-link">Register</a>
                            <a href="#" class="nav-item nav-link">Login</a>
                        </div>
                  </div>
                </div>
              </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
              <h2>Tags</h2>
              <p>HTML is the standard markup language for describing the structure of the web pages. Our HTML tutorials will help you to understand the basics of latest HTML5 language, so that you can create your own web pages or website.</p>
              <p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" class="btn btn-success">Learn More »</a></p>
          </div>
          <div class="col-md-10">
              <div class="row">
                  <div class="col">
                      <h2>New Note</h2>
                      <p>CSS is used for describing the presentation of web pages. CSS can save a lot of time and effort. Our CSS tutorials will help you to learn the essentials of latest CSS3, so that you can control the style and layout of your website.</p>
                      <p><a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" class="btn btn-success">Learn More »</a></p>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="card-group">
                          <div class="card">
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>
                          <div class="card" >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>
                          <div class="card" >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>    
                          <div class="card" >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>    
                      </div>                    
                </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
