export function Field({ label, ...props }) {
  return (
    <label className="field">
      <span className="label">{label}</span>
      <input {...props} />
    </label>
  );
}
