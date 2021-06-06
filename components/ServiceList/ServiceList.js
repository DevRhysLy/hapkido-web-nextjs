import React from "react"
import Link from "next/link"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

export default function ServiceList({ services = [] }) {
  return (
    <GridContainer spacing={4}>
      {services.map((service) => (
        <GridItem xs={12} md={3} key={service.sys.id}>
            <h2>
              <Link href={`/services/${service.fields.slug}`}>
                <a>{service.fields.service}</a>
              </Link>
            </h2>
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
