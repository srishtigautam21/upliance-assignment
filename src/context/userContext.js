import { useContext, createContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    address: "",
    phone: 0,
  });
  const [userData, setUserData] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleFormData = () => {
    const newUser = { ...form, id: Date.now().toString() };
    setUserData([...userData, newUser]);
  };
  return (
    <UserContext.Provider
      value={{
        form,
        setForm,
        userData,
        setUserData,
        handleFormData,
        handleInput,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);
export { useUser, UserProvider };
