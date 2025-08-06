//======================================
export const BoldBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div
        className="border border-secondary relative bg-card/75"
        style={{
          boxShadow: '0px 3px 0px 0px white',
        }}>
        {children}
      </div>
    </div>
  );
};
