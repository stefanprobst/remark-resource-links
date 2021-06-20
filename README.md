This is a plugin for `remark-stringify` version <= 8.0, which enforces that
links are never serialized as autolinks (`<https://example.com>`), which are not
compatible with mdx. Newer versions of `remark-stringify` have a built-in
`resourceLink` option for this.
