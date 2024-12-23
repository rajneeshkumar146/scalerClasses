## Hashing Password with Bcrypt.

# There are three general guidelines for security basis on which we design our backend.

    a. Zero Trust Model: "Never Trust, Always Verify.

        i. Assume that no one (neither inside nor outside the
        network) is trustworthy. This means always verifying
        the authenticity of users, services, and systems
        before granting access to resources.

        ii. Implement strong authentication mechanisms,
        validate and sanitize all inputs, and regularly audit
        logs and activities.

    b. Principle of Least Privilege: "Minimal Access for Maximum
       Security”

        i. Each user, program, or system should have the least
        amount of privilege necessary to perform its function.
        This limits the potential damage in case of a security
        breach.

    c. Reduce Attack Surface: "Minimize Risk by Minimizing
       Exposure"
       
        i. The attack surface refers to the total number of
        points (like software, services, and ports) where an
        unauthorized user can try to enter data or extract data
        from the environment. Reducing the attack surface
        minimizes the potential entry points for attackers.