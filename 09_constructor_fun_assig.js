class Bank {
    constructor(BankName, Location, IFSCCode, BranchCode) {
        this.BankName = BankName;
        this.Location = Location;
        this.IFSCCode = IFSCCode;
        this.BranchCode = BranchCode;
    }
    detail() {
        console.log(`Bank Details => BankName: ${this.BankName}, Location: ${this.Location}, IFSCCode: ${this.IFSCCode}, BranchCode: ${this.BranchCode}`);
    }
}
const yesBank = new Bank("YesBank", "Pune", "YES2000015", 1515);
yesBank.detail();

const sbiBank = new Bank("SBI", "Sangola", "SBI000271", 271);
sbiBank.detail();

const mahBank = new Bank("MahBank", "Mumbai", "MAH1515", 1414);
mahBank.detail();

const axisBank = new Bank("Axis", "Solapur", "AXIS1212", 1212);
axisBank.detail();