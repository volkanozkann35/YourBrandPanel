export default function Stats({stats}) {
  return (
    <div style={{ display:'flex', gap:'20px', margin:'20px 0' }}>
      {Object.entries(stats).map(([k,v])=>(
        <div key={k} style={{ background:'#fafafa', padding:'10px', border:'1px solid #ccc', borderRadius:'8px' }}>
          <strong>{k}:</strong> {v}
        </div>
      ))}
    </div>
  );
}
