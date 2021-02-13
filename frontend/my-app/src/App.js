import './App.css';

function App() {
  return (
    <div class="container">
        <div id="myModal" class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmation</h5>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Do you want to save changes to this document before closing?</p>
                        <p class="text-secondary"><small>If you don't save, your changes will be lost.</small></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>      
        <div class="row">
          <div class="col">
              <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="container">
                  <a href="#" class="navbar-brand mr-3" on>EasyNote</a>
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
            <div class="card mb-4">
                <div class="card-header">Tags</div>
                <div class="list-group list-group-flush">
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
                <div class="card-body">
                </div>
            </div>              
          </div>
          <div class="col-md-10">
              <div class="row">
                  <div class="col">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <a href="#myModal" role="button" class="btn btn-primary" data-toggle="modal">New Note</a>
                        </div>
                    </div>  
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                    <div class="d-flex flex-wrap">
                          <div class="card mb-4" >
                              <div class="card-body text-center ">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-secondary">Edit</a>
                                  &nbsp;<a href="#" class="btn btn-danger">Remove</a>
                              </div>
                          </div>
                          <div class="card mb-4">
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-secondary">Edit</a>
                                  &nbsp;<a href="#" class="btn btn-danger">Remove</a>
                              </div>
                          </div>
                          <div class="card mb-4" >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-secondary">Edit</a>
                                  &nbsp;<a href="#" class="btn btn-danger">Remove</a>
                              </div>
                          </div>
                          <div class="card mb-4" >
                              <div class="card-body text-center">
                                  <h5 class="card-title">Alice Liddel</h5>
                                  <p class="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                  <a href="#" class="btn btn-secondary">Edit</a>
                                  &nbsp;<a href="#" class="btn btn-danger">Remove</a>
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
