import { useState, useCallback, type ChangeEvent } from "react";

export const useFormCreate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    [],
  );

  const handleClear = () => {
    setFormData({
      title: "",
      description: "",
    });
  };

  return {
    formData,
    handleFormChange,
    handleClear,
  };
};
