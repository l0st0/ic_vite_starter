import React from "react"
import { Link } from "react-router-dom"
import { Flex } from "@/components"

const Home = () => {
  return (
    <Flex>
      <Link to="/about">About</Link>
    </Flex>
  )
}

export default Home
