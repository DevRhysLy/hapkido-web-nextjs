import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function ServiceList({ services = [] }) {
  return (
    <GridContainer spacing={4}>
      {services.map((service) => (
        <GridItem xs={3} key={service.sys.id}>
          <header>
            <h1>
              <Link href={`/services/${service.fields.slug}`}>
                <a>{service.fields.service}</a>
              </Link>
            </h1>
          </header>
          <p>{service.fields.shortDescription}</p>
          <p>
            <Link href={`/services/${service.fields.slug}`}>
              <a>Learn More »</a>
            </Link>
          </p>
        </GridItem>
      ))}
</GridContainer>
  )
}
