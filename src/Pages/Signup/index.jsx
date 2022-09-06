import Header from "../../Components/Header";
import SingupForm from "../../Components/SingupForm";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <main>
        <Header />
        <motion.div
          initial={{ marginRight: "-100px" }}
          animate={{ marginRight: "0px" }}
          transition={{ duration: 0.7 }}
        >
          <SingupForm />
        </motion.div>
      </main>
    </motion.div>
  );
};

export default SignUp;
