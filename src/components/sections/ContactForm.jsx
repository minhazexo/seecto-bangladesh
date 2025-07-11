import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../common/Button";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
        ) : null}
      </div>

      <Button type="submit" variant="primary" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;