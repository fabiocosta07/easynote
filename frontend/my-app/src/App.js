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
              <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active">
        <i class="fa fa-home"></i> Home
    </a>
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-camera"></i> Pictures <span class="badge badge-pill badge-primary pull-right">145</span>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-music"></i> Music <span class="badge badge-pill badge-primary pull-right">50</span>
    </a>
    <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-film"></i> Videos <span class="badge badge-pill badge-primary pull-right">8</span>
    </a>
</div>              
          </div>
          <div class="col-md-10">
              <div class="row">
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <p><a href="https://www.tutorialrepublic.com/css-tutorial/" target="_blank" class="btn btn-success">New Note</a></p>
                    </div>                      
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                    <div class="d-flex flex-wrap">
                          <div class="card" style={{width:"300px"}}>
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>
                          <div class="card" style={{width:"300px"}}>
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>
                          <div class="card" style={{width:"300px"}} >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-primary">View Profile</a>
                              </div>
                          </div>    
                          <div class="card" style={{width:"300px"}} >
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
