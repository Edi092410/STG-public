export const paginationConfig = (total, pagination, setPagination) => ({
  // Customize pagination here
  total: total, // Total number of items
  showSizeChanger: true, // Show the "items per page" dropdown
  current: pagination.page,
  pageSize: pagination.pageSize,
  onChange: (pa, paSi) => {
    setPagination((prev) => ({ ...prev, page: pa }));
    setPagination((prev) => ({ ...prev, pageSize: paSi }));
  },
  showTotal: (total) => `Нийт: ${total}`, // Custom total text
  locale: {
    items_per_page: "", // Customize the text for size changer
  },
  // Add more customization options as needed
});
