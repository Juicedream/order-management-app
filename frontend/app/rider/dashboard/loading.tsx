import React, { CSSProperties } from 'react'
import { ScaleLoader } from 'react-spinners'

const Loading = () => {
    const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#302e2e",
};
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ScaleLoader
        color="#314158"
        loading={true}
        cssOverride={override}
        barCount={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading