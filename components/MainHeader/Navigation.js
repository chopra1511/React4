import React, { useContex } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {
  const ctx = useContex(AuthContext);

  return (
         <nav className={classes.nav}>
           <ul>
             {ctx.isLoggedIn && (
               <li>
                 <a href="/">Users</a>
               </li>
             )}
             {ctx.isLoggedIn && (
               <li>
                 <a href="/">Admin</a>
               </li>
             )}
             {ctx.isLoggedIn && (
               <li>
                 <button onClick={ctx.onLogout}>Logout</button>
               </li>
             )}
           </ul>
         </nav>
  );
};

export default Navigation;
