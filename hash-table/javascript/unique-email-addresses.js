function numUniqueEmails(emails) {
  const uniqueEmails = new Set();

  for (const email of emails) {
    const [localName, domainName] = email.split('@');
    const normalizedLocalName = localName.split('.').join('').split('+')[0];
    const normalizedEmail = `${normalizedLocalName}@${domainName}`;
    uniqueEmails.add(normalizedEmail);
  }

  return uniqueEmails.size;
}
