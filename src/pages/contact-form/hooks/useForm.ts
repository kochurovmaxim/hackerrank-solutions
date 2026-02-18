import {
  useCallback,
  useState,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";

export function useForm<T extends Record<string, string>>(initialState: T) {
  const [formData, setFormData] = useState<T>(initialState);
  const [submittedData, setSubmittedData] = useState<T | null>(null);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = evt.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setError((prev) => (prev ? "" : prev));
    },
    [],
  );

  const handleSubmit = useCallback(
    (evt: SyntheticEvent<HTMLFormElement>) => {
      evt.preventDefault();

      const normalizedData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, value.trim()]),
      ) as T;

      const isFormValid = Object.values(normalizedData).every(
        (v) => v.length > 0,
      );

      if (!isFormValid) {
        setError("All fields are required.");
        return;
      }

      setError("");
      setSubmittedData(normalizedData);
      setFormData(initialState);
    },
    [formData, initialState],
  );

  return {
    formData,
    submittedData,
    error,
    handleChange,
    handleSubmit,
  };
}
