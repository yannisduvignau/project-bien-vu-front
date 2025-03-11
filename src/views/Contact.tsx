import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const text = "BienVu";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Le prénom est requis";
    if (!formData.lastName.trim()) newErrors.lastName = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Formulaire soumis", formData);
      alert("Votre message a bien été envoyé !");
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-35 p-6 ">
       <h1 className="!text-8xl font-bold text-exerg flex !ml-4 !mb-8">
        {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          {letter}
        </motion.span>
      ))}
    </h1>
      <h2 className="text-gray-600 !mb-15 text-center !text-4xl">- Contactez-nous -</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 contact-form">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-l font-medium !ml-8 !mb-3">Prénom</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border bg-around focus:ring focus:ring-blue-200 !mb-8"
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-l font-medium !ml-8 !mb-3">Nom</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border bg-around focus:ring focus:ring-blue-200 !mb-8"
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-l font-medium !ml-8 !mb-3">Adresse e-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border bg-around  rounded-md focus:ring focus:ring-blue-200 !mb-8"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-l font-medium !ml-8 !mb-3">Message</label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border bg-around  rounded-md !mb-8"
          />
          {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="btn btn-secondary !text-white py-2 rounded-md transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
