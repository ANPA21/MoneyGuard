export const getTransactionState = state => state.transactions.transactions;

export const getModalState = state => state.modal.isModalOpen;

export const getError = state => state.transactions.error;

export const getIsLoading = state => state.transactions.isLoading;

export const getCategoryState = state => state.category.category;
