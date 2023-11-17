import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    (async () => {
      fetch("http://localhost:5001/users")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data.users);
          setUsers(data.users);
        })
        .catch(error => {
          console.error('Fetch error:', error);
        });
    })();
  }, []);

  const filterUsers = () => {
    if (!users) {
      return [];
    }

    return users.filter(Navuser => {
      return (
        (Navuser.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '')
      );
    });
  }

  return (
    <section className="intro">
      <div className="bg-image h-100" style={{ backgroundColor: "#f5f7fa" }}>
        <div className="mask d-flex align-items-center h-100">
          <div className="sidebarSearch">
            <input
              type="search"
              className="form-control"
              placeholder="Search for users by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" style={{ position: "relative", height: "700px" }}>
                      <table id="userTable" className="table table-striped mb-0">
                        <thead style={{ backgroundColor: "#002d72" }}>
                          <tr>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Id</th>
                            <th scope="col">Creation Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterUsers().map((Navuser, index) => (
                            <tr>
                              <td>{Navuser.name}</td>
                              <td>{Navuser.email}</td>
                              <td>{Navuser.phone}</td>
                              <td>{Navuser._id}</td>
                              <td>{Navuser.updatedAt}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Users