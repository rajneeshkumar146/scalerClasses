import React from 'react'

import TheatreList from "./TheatreList";

function Partner() {

  const items = [
    {
      key: "1",
      label: "Thatres",
      children: <TheatreList />
    }
  ]
  return (
    <>
      <h1>Partner Page</h1>
      <Tabs items={items} />
    </>
  )
}

export default Partner