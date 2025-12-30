import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type AddressData = {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const AddressForm = () => {
  const blankAddress: AddressData = {
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  };

  const [address, setAddress] = useState<AddressData>(blankAddress);
  const navigate = useNavigate();

  const handleInputChange = useCallback(
    (field: keyof AddressData, value: string) => {
      setAddress((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    localStorage.setItem("orderAddress", JSON.stringify(address));
    navigate("/order");
  };

  return (
    <div className="container-fluid py-4 px-3 px-lg-4 min-vh-100 d-flex align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="card border-0 shadow-lg rounded-3">
            <div className="card-header bg-success text-white border-0 py-4 px-4">
              <h4 className="mb-0 fw-semibold">Shipping Address</h4>
            </div>

            <div className="card-body p-4 p-lg-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-bold text-dark mb-2">
                    Street Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control border-2 rounded-3 py-3"
                    value={address.street}
                    onChange={(e) => handleInputChange("street", e.target.value)}
                    placeholder="H. No. 123, Main Road, Near Market"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-dark mb-2">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    className="form-control border-2 rounded-3 py-3"
                    value={address.apartment || ""}
                    onChange={(e) => handleInputChange("apartment", e.target.value)}
                    placeholder="Flat 4B, Block A, 2nd Floor"
                  />
                </div>

                <div className="row g-3">
                  <div className="col-lg-8">
                    <label className="form-label fw-bold text-dark mb-2">
                      Town/City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control border-2 rounded-3 py-3"
                      value={address.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="Mumbai, Delhi..."
                      required
                    />
                  </div>
                  <div className="col-lg-4">
                    <label className="form-label fw-bold text-dark mb-2">
                      PIN Code <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control border-2 rounded-3 py-3"
                      value={address.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="PIN Code"
                      maxLength={6}
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 mt-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark mb-2">
                      State <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control border-2 rounded-3 py-3"
                      value={address.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="State"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-dark mb-2">
                      Country <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select border-2 rounded-3 py-3"
                      value={address.country}
                      onChange={(e) => handleInputChange("country", e.target.value)}
                      required
                    >
                      <option value="">Choose your country</option>
                      <option value="India">India</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 pt-3">
                  <button
                    type="submit"
                    className="btn btn-success btn-lg w-100 fw-bold py-3 rounded-3 border-0 shadow-sm"
                  >
                    <i className="fas fa-arrow-right me-2"></i>
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
