








import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";

const API = "https://vrl-product-backend-stru.onrender.com/api";


export default function Admin() {
  const [tab, setTab] = useState("dashboard");


  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [feedback, setFeedback] = useState([]);


  const [pName, setPName] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [pStock, setPStock] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingValues, setEditingValues] = useState({});


const getConfig = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const token = userInfo?.token;

  return {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` })
    }
  };
};



  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`${API}/users`, getConfig());
      setUsers(data);
      console.log(data, "usere")
    } catch (err) {
      console.error("fetchUsers:", err.response?.data || err.message);
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${API}/products`, getConfig());
      setProducts(data);
    } catch (err) {
      console.error("fetchProducts:", err.response?.data || err.message);
    }
  };

  const fetchOrders = async () => {
    try {
      const { data } = await axios.get(`${API}/orders`, getConfig());
      setOrders(data);
    } catch (err) {
      console.error("fetchOrders:", err.response?.data || err.message);
    }
  };

  const fetchSuppliers = async () => {
    try {
      const { data } = await axios.get(`${API}/suppliers`, getConfig()); // fix endpoint name
      setSuppliers(data);
    } catch (err) {
      console.error("fetchSuppliers:", err.response?.data || err.message);
    }
  };

  const fetchFeedback = async () => {
    try {
      const { data } = await axios.get(`${API}/feedback/product/ALL`, getConfig());
      setFeedback(data);
    } catch (err) {
      console.error("fetchFeedback:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchProducts();
    fetchOrders();
    fetchSuppliers();
    fetchFeedback();
  }, []);


  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const body = { name: pName, price: Number(pPrice), stock: Number(pStock) };
      await axios.post(`${API}/products`, body, getConfig());
      alert("Product created");
      setPName(""); setPPrice(""); setPStock("");
      fetchProducts();
      setTab("products");
      console.log(body, "Product Data")
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Create failed: " + (err.response?.data?.message || err.message));
    }
  };

  const startEdit = (prod) => {
    setEditingId(prod._id);
    setEditingValues({
      name: prod.name || "",
      price: prod.price || 0,
      stock: prod.stock || 0
    });
    console.log("product updated",res.data)
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingValues({});
  };

  const saveEdit = async (id) => {
    try {
      await axios.put(`${API}/products/${id}`, editingValues, getConfig());
      alert("Product updated");
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Update failed: " + (err.response?.data?.message || err.message));
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await axios.delete(`${API}/products/${id}`, getConfig());
      alert("Deleted");
      fetchProducts();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Delete failed");
    }
  };

  
  const TabButton = ({ id, label }) => (
    <button className={`tab-btn ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>
      {label}
    </button>
  );


const [editUserId, setEditUserId] = useState(null);

const [editUser, setEditUser] = useState({
  name: "",
  email: "",
  role: "user",
});







// const updateUser = async (id) => {
//   try {
//     const { data } = await axios.put(
//       `https://vrl-product-backend-stru.onrender.com/api/users/${id}`,
//       {
//         name: editUser.name,
//         email: editUser.email,
//         role: editUser.role,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${userInfo.token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // ✅ UI update without refresh
//     setUsers((prev) =>
//       prev.map((u) =>
//         u._id === id ? data : u
//       )
//     );

//     setEditUserId(null);
//   } catch (error) {
//     console.error("Update failed:", error.response?.data || error.message);
//     alert("User update failed");
//   }
// };




const updateUser = async (id) => {
  try {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5000/api/users/${id}`,
      editUser,
      config
    );

    // Update UI instantly
    setUsers(users.map((u) => (u._id === id ? data : u)));

    setEditUserId(null);
    alert("User updated successfully");
  } catch (error) {
    console.error(error);
    alert("Update failed");
  }
};







  return (
    <div className="admin-wrap">
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <TabButton id="dashboard" label="Dashboard" />
          <TabButton id="users" label={`Users (${users.length})`} />
          <TabButton id="products" label={`Products (${products.length})`} />
          <TabButton id="addproduct" label="Add Product" />
          <TabButton id="orders" label={`Orders (${orders.length})`} />
          <TabButton id="suppliers" label={`Suppliers (${suppliers.length})`} />
          <TabButton id="feedback" label={`Feedback (${feedback.length})`} />
        </nav>
      </aside>

      <main className="admin-maincontent">
        {tab === "dashboard" && (
          <section>
            <h1>Dashboard</h1>
            <div className="cards">
              <div className="card"><h3>Users</h3><p>{users.length}</p></div>
              <div className="card"><h3>Products</h3><p>{products.length}</p></div>
              <div className="card"><h3>Orders</h3><p>{orders.length}</p></div>
              <div className="card"><h3>Suppliers</h3><p>{suppliers.length}</p></div>
            </div>
          </section>
        )}

        {/* {tab === "suppliers" && (
          <section>
            <h1>Suppliers</h1>
            <table className="admin-table" style={{ marginTop: 20 }}>
              <thead>
                <tr><th>Name</th><th>Stock</th><th>Contact</th><th>Price</th></tr>
              </thead>
              <tbody>
                {suppliers.map(s => (
                  <tr key={s._id}>
                    <td>{s.name}</td>
                    <td>{s.quantity}</td>
                    <td>{s.contactNo}</td>
                    <td>{s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )} */}


{tab === "suppliers" && (
  <section>
    <h1>Suppliers</h1>

    <table className="admin-table" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stock (kg)</th>
          <th>Contact</th>
          <th>Price / kg</th>
          <th>Total Amount (Rs)</th>
        </tr>
      </thead>

      <tbody>
        {suppliers.map((s) => (
          <tr key={s._id}>
            <td>{s.name}</td>
            <td>{s.quantity}</td>
            <td>{s.contactNo}</td>
            <td>Rs {s.price}</td>
            <td>
              <strong>Rs {s.quantity * s.price}</strong>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)}


 {/* {tab === "users" && (
          <section>
            <h1>Registered Users</h1>
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Email</th><th>Role</th></tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )} */}




{/* {tab === "users" && (
  <section>
    <h1>Registered Users</h1>

    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u._id}>
            <td>{u.name}</td>
            <td>{u.email}</td>

            <td>
              {editUserId === u._id ? (
                <select
                  value={editRole}
                  onChange={(e) => setEditRole(e.target.value)}
                >
                  <option value="user">User</option>
                  <option value="supplier">Supplier</option>
                  <option value="admin">Admin</option>
                </select>
              ) : (
                <span className={`role ${u.role}`}>{u.role}</span>
              )}
            </td>

            <td>
              {editUserId === u._id ? (
                <>
                  <button
                    className="btn-save"
                    onClick={() => updateUserRole(u._id)}
                  >
                    Save
                  </button>

                  <button
                    className="btn-cancel"
                    onClick={() => setEditUserId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="btn-edit"
                  onClick={() => {
                    setEditUserId(u._id);
                    setEditRole(u.role);
                  }}
                >
                  Edit Role
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)} */}




{tab === "users" && (
  <section>
    <h1>Registered Users</h1>

    <table className="admin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <tr key={u._id}>
            {/* NAME */}
            <td>
              {editUserId === u._id ? (
                <input
                  value={editUser.name}
                  onChange={(e) =>
                    setEditUser({ ...editUser, name: e.target.value })
                  }
                />
              ) : (
                u.name
              )}
            </td>

            {/* EMAIL */}
            <td>
              {editUserId === u._id ? (
                <input
                  value={editUser.email}
                  onChange={(e) =>
                    setEditUser({ ...editUser, email: e.target.value })
                  }
                />
              ) : (
                u.email
              )}
            </td>

            {/* ROLE */}
            <td>
              {editUserId === u._id ? (
                <select
                  value={editUser.role}
                  onChange={(e) =>
                    setEditUser({ ...editUser, role: e.target.value })
                  }
                >
                  <option value="user">User</option>
                  <option value="supplier">Supplier</option>
                  <option value="admin">Admin</option>
                </select>
              ) : (
                <span className={`role ${u.role}`}>{u.role}</span>
              )}
            </td>

            {/* ACTION */}
            <td>
              {editUserId === u._id ? (
                <>
                  <button
                    className="btn-save"
                    onClick={() => updateUser(u._id)}
                  >
                    Save
                  </button>

                  <button
                    className="btn-cancel"
                    onClick={() => setEditUserId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="btn-edit"
                  onClick={() => {
                    setEditUserId(u._id);
                    setEditUser({
                      name: u.name,
                      email: u.email,
                      role: u.role,
                    });
                  }}
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
)}







         {tab === "addproduct" && (
          <section>
            <h1>Add Product</h1>
            <form onSubmit={handleCreateProduct} className="form-grid">
              <label>
                Name
                <input value={pName} onChange={(e) => setPName(e.target.value)} required />
              </label>

              <label>
                Price
                <input type="number" value={pPrice} onChange={(e) => setPPrice(e.target.value)} required />
              </label>

              <label>
                Stock
                <input type="number" value={pStock} onChange={(e) => setPStock(e.target.value)} required />
              </label>

              <div />
              <button type="submit" className="primary">Create Product</button>
            </form>
          </section>
        )};
            {tab === "orders" && (
          <section>
            <h1>Orders</h1>
            <table className="admin-table">
              <thead>
                <tr><th>Order ID</th><th>User</th><th>Total</th><th>Status</th></tr>
              </thead>
              <tbody>
                {orders.map(o => (
                  <tr key={o._id}>
                    <td>{o._id}</td>
                    <td>{o.userId?.name || o.userId}</td>
                    <td>{o.totalPrice}</td>
                    <td>{o.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )};

          {tab === "products" && (
          <section>
            <h1>Products</h1>
            <table className="admin-table">
              <thead>
                <tr><th>Name</th><th>Price</th><th>Stock</th><th>Actions</th></tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p._id}>
                    <td>
                      {editingId === p._id ? (
                        <input
                          value={editingValues.name}
                          onChange={(e) => setEditingValues(prev => ({ ...prev, name: e.target.value }))}
                        />
                      ) : p.name}
                    </td>

                    <td>
                      {editingId === p._id ? (
                        <input
                          type="number"
                          value={editingValues.price}
                          onChange={(e) => setEditingValues(prev => ({ ...prev, price: Number(e.target.value) }))}
                        />
                      ) : p.price}
                    </td>

                    <td>
                      {editingId === p._id ? (
                        <input
                          type="number"
                          value={editingValues.countInStock}
                          onChange={(e) => setEditingValues(prev => ({ ...prev, countInStock: Number(e.target.value) }))}
                        />
                      ) : p.countInStock}
                    </td>

                    <td className="actions">
                      {editingId === p._id ? (
                        <>
                          <button onClick={() => saveEdit(p._id)} className="save">Save</button>
                          <button onClick={cancelEdit} className="cancel">Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEdit(p)} className="edit">Edit</button>
                          <button onClick={() => deleteProduct(p._id)} className="delete">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}


           {tab === "feedback" && (
          <section>
            <h1>User Feedback</h1>
            <table className="admin-table">
              <thead><tr><th>User</th><th>Message</th></tr></thead>
              <tbody>
                {feedback.map(f => (
                  <tr key={f._id}>
                    <td>{f.userId?.name || f.userId}</td>
                    <td>{f.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}
        
    
      </main>
    </div>
  );
}






