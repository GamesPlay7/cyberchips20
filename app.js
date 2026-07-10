class WalletManager {
    constructor() {
        // Якщо користувач новий, задаємо стартові значення
        if (!localStorage.getItem('cc_balance')) {
            localStorage.setItem('cc_balance', '1000');
            localStorage.setItem('cc_credit', '0');
        }
        if (!localStorage.getItem('cc_username')) {
            localStorage.setItem('cc_username', 'Гість');
        }
    }

    // Отримати поточний баланс
    getBalance() {
        return parseInt(localStorage.getItem('cc_balance')) || 0;
    }

    // Змінити баланс (додати або відняти гроші)
    updateBalance(amount) {
        let current = this.getBalance();
        localStorage.setItem('cc_balance', (current + amount).toString());
        return this.getBalance();
    }

    // Отримати суму кредиту (боргу)
    getCredit() {
        return parseInt(localStorage.getItem('cc_credit')) || 0;
    }

    // Змінити суму кредиту
    updateCredit(amount) {
        let current = this.getCredit();
        localStorage.setItem('cc_credit', (current + amount).toString());
        return this.getCredit();
    }

    // Зберегти ім'я гравця
    setUsername(username) {
        localStorage.setItem('cc_username', username);
    }

    // Отримати ім'я гравця
    getUsername() {
        return localStorage.getItem('cc_username') || 'Гість';
    }
}

// Створюємо єдиний екземпляр для всього проекту
const wallet = new WalletManager();