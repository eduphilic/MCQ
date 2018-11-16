import React from "react";
import { CardHeader, CardHeaderProps } from "../../components/CardHeader";

export function AdminCardHeader(props: CardHeaderProps) {
  return (
    <CardHeader {...props} titleStyle={{ fontSize: 18, fontWeight: 500 }} />
  );
}
