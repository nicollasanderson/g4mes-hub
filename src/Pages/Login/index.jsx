import { motion } from "framer-motion";
import Header from "../../Components/Header";
import LoginForm from "../../Components/LoginForm";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <main>
        <Header />
        <motion.div
          initial={{ marginLeft: "-100px" }}
          animate={{ marginLeft: "0px" }}
          transition={{ duration: 0.7 }}
        >
          <LoginForm />
        </motion.div>
      </main>
    </motion.div>
  );
};

export default Login;
