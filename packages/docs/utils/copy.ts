export function copyCommand() {
    const value = document.getElementById('command-install-manakit');
    navigator.clipboard.writeText(value?.textContent as any);
}