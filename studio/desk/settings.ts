import S from "@sanity/desk-tool/structure-builder";

// prettier-ignore
export const settings = S.listItem()
  .title("Widgets & Themes")
  .child(
    S.list()
      .title("Settings")
      .items([
        S.listItem()
          .title("Payment Settings")
          .child(
            S.document()
              .schemaType("checkOutSettings")
              .documentId("checkOutSettings")
              .title("Edit")
          ),
        S.listItem()
          .title("Header & Footer")
          .child(
            S.document()
              .schemaType("headerFooter")
              .documentId("headerFooter")
              .title("Edit")
          ),
        S.listItem()
          .title("Site Icons")
          .child(
            S.document().schemaType("icons").documentId("icons").title("Edit")
          ),
        S.listItem()
          .title("Theme")
          .child(
            S.document().schemaType("theme").documentId("theme").title("Edit")
          ),
      ])
  );
