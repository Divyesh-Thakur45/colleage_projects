import { useEffect, useState } from "react";
import { X, Check } from "lucide-react";
import axios from "axios";

export const SignUp = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [dialog, setDialog] = useState(true);

  // ✅ Fixed input change handler
  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    const response = await axios.post("http://localhost:8080/auth/register", {
      email: formData.email,
      password: formData.password,
    });
    console.log("🚀 ~ handleSubmit ~ response:", response);
    if (response?.data?.success) {
      await axios.post(
        "http://localhost:8080/auth/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );
    }
  };

  const handleDialogClose = () => {
    setDialog(false);
    if (onClose) onClose();
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] items-center justify-center bg-black bg-opacity-90`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999] bg-white rounded-xl shadow-2xl">
        <div className="bg-card rounded-xl shadow-2xl w-full max-w-md mx-auto max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <h2 className="text-xl font-medium text-foreground">
              Create an Account
            </h2>
            <button
              onClick={handleDialogClose}
              className="p-1 hover:bg-accent rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          {/* Form */}
          <div className="px-6 pb-6 space-y-4">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              label="First Name"
              isRequired
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
            />

            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              label="Last Name"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange("lastName")}
            />

            {/* Mobile with country code */}
            <div className="space-y-1">
              <label className="text-sm text-foreground">
                Mobile<span className="text-destructive">*</span>
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-input border border-input-border border-r-0 rounded-l-lg text-sm text-muted-foreground">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="flex-1 h-12 rounded-r-lg border border-input-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-0 transition-colors"
                  value={formData.mobile}
                  onChange={handleInputChange("mobile")}
                />
              </div>
            </div>

            <input
              label="Email"
              isRequired
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange("email")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              label="Password"
              isRequired
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange("password")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {/* WhatsApp Updates */}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                className={`flex items-center justify-center w-5 h-5 border-2 rounded transition-colors ${
                  formData.whatsappUpdates
                    ? "bg-green-500 border-green-500"
                    : "border-input-border"
                }`}
              >
                {formData.whatsappUpdates && (
                  <Check className="h-3 w-3 text-white" />
                )}
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-foreground">
                  Get updates on Whatsapp
                </span>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">W</span>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <p className="text-xs text-muted-foreground">
              By creating this account, you agree to our{" "}
              <button
                type="button"
                className="text-link-primary hover:text-link-hover underline"
              >
                Privacy Policy
              </button>
            </p>

            {/* Create Account Button */}
            <button
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Create an Account
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm text-muted-foreground">
              Have an account?{" "}
              <button
                type="button"
                className="text-link-primary hover:text-link-hover font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
