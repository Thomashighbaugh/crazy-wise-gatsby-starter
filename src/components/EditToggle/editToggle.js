import React from "react"
import { useInlineForm } from "react-tinacms-inline"
import { EditButton } from "../Style"

export function EditToggle() {
  const { status, deactivate, activate } = useInlineForm()

  return (
    <EditButton
      onClick={() => {
        status === "active" ? deactivate() : activate()
      }}
    >
      {status === "active" ? "Preview" : "Edit"}
    </EditButton>
  )
}
