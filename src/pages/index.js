import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
  <div>
    <Header>Homepage</Header>
    <Link to="/about">About</Link>
  </div>
)
